<?php
// Capture any PHP fatal error and return it as JSON instead of a blank 500
ini_set('display_errors', '0');
register_shutdown_function(function () {
    $err = error_get_last();
    $fatal = array(E_ERROR, E_PARSE, E_CORE_ERROR, E_COMPILE_ERROR);
    if ($err && in_array($err['type'], $fatal, true)) {
        if (!headers_sent()) {
            http_response_code(500);
            header('Content-Type: application/json; charset=utf-8');
        }
        echo json_encode(array(
            'error' => 'PHP fatal: ' . $err['message'],
            'file'  => basename($err['file']),
            'line'  => $err['line'],
        ));
    }
});

require_once __DIR__ . '/config.php';

// ─── CORS Headers ──────────────────────────────────────────────────────────
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, x-admin-password');
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// ─── Helpers ───────────────────────────────────────────────────────────────
function readDB() {
    if (!file_exists(DB_PATH)) {
        file_put_contents(DB_PATH, '{}');
    }
    $raw = file_get_contents(DB_PATH);
    $decoded = json_decode($raw, true);
    return $decoded ? $decoded : array();
}

function writeDB($data) {
    file_put_contents(DB_PATH, json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
}

function jsonResponse($data, $status) {
    if ($status === null) { $status = 200; }
    http_response_code($status);
    echo json_encode($data, JSON_UNESCAPED_UNICODE);
    exit;
}

function requireAuth() {
    $provided = isset($_SERVER['HTTP_X_ADMIN_PASSWORD']) ? $_SERVER['HTTP_X_ADMIN_PASSWORD'] : '';
    if ($provided === '' || $provided !== ADMIN_PASSWORD) {
        jsonResponse(array('error' => 'Yanlış şifre. Lütfen tekrar deneyin.'), 401);
    }
}

// ─── Route parsing ─────────────────────────────────────────────────────────
$routeRaw = isset($_GET['_route']) ? $_GET['_route'] : '';
$route  = trim($routeRaw, '/');
$parts  = ($route !== '') ? explode('/', $route) : array();
$method = $_SERVER['REQUEST_METHOD'];

// ─── Routes ────────────────────────────────────────────────────────────────

// POST /api/auth
if ($method === 'POST' && $parts === array('auth')) {
    $provided = isset($_SERVER['HTTP_X_ADMIN_PASSWORD']) ? $_SERVER['HTTP_X_ADMIN_PASSWORD'] : '';
    if ($provided === '' || $provided !== ADMIN_PASSWORD) {
        jsonResponse(array('error' => 'Yanlış şifre. Lütfen tekrar deneyin.'), 401);
    }
    jsonResponse(array('ok' => true), 200);
}

// GET /api/plants
if ($method === 'GET' && $parts === array('plants')) {
    jsonResponse(readDB(), 200);
}

// GET /api/plants/:city
if ($method === 'GET' && count($parts) === 2 && $parts[0] === 'plants') {
    $city = strtoupper(urldecode($parts[1]));
    $db   = readDB();
    $cityData = isset($db[$city]) ? $db[$city] : array();
    jsonResponse($cityData, 200);
}

// POST /api/plants/:city
if ($method === 'POST' && count($parts) === 2 && $parts[0] === 'plants') {
    requireAuth();
    $city = strtoupper(urldecode($parts[1]));
    $bodyRaw = file_get_contents('php://input');
    $body = json_decode($bodyRaw, true);
    if (!$body) { $body = array(); }

    $ad      = isset($body['ad'])      ? trim($body['ad'])      : '';
    $latince = isset($body['latince']) ? trim($body['latince']) : '';
    $yoresel = isset($body['yoresel']) ? trim($body['yoresel']) : '';
    $amac    = isset($body['amac'])    ? trim($body['amac'])    : '';

    if ($ad === '' || $latince === '') {
        jsonResponse(array('error' => 'Bitki adı ve latince adı zorunludur.'), 400);
    }

    $db = readDB();
    if (!isset($db[$city])) { $db[$city] = array(); }

    $plant = array(
        'ad'          => $ad,
        'yoresel'     => $yoresel,
        'latince'     => $latince,
        'amac'        => $amac,
        'addedByUser' => true,
    );
    $db[$city][] = $plant;
    writeDB($db);
    jsonResponse($plant, 201);
}

// POST /api/plants/:city/:index/delete  (POST used for hosting compatibility)
if ($method === 'POST' && count($parts) === 4 && $parts[0] === 'plants' && $parts[3] === 'delete') {
    requireAuth();
    $city = strtoupper(urldecode($parts[1]));
    $idx  = (int) $parts[2];
    $db   = readDB();

    if (!isset($db[$city][$idx])) {
        jsonResponse(array('error' => 'Bitki bulunamadı'), 404);
    }

    $removed = $db[$city][$idx];
    array_splice($db[$city], $idx, 1);
    if (empty($db[$city])) { unset($db[$city]); }
    writeDB($db);
    jsonResponse($removed, 200);
}

// ─── Fallback ──────────────────────────────────────────────────────────────
jsonResponse(array('error' => 'Geçersiz istek', 'route' => $route, 'parts' => $parts), 404);
