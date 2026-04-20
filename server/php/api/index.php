<?php
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
    return json_decode($raw, true) ?: [];
}

function writeDB(array $data) {
    file_put_contents(DB_PATH, json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
}

function jsonResponse($data, int $status = 200) {
    http_response_code($status);
    echo json_encode($data, JSON_UNESCAPED_UNICODE);
    exit;
}

function requireAuth() {
    $provided = $_SERVER['HTTP_X_ADMIN_PASSWORD'] ?? '';
    if (empty($provided) || $provided !== ADMIN_PASSWORD) {
        jsonResponse(['error' => 'Yanlış şifre. Lütfen tekrar deneyin.'], 401);
    }
}

// ─── Route parsing ─────────────────────────────────────────────────────────
// Route comes from ?_route= query param set by .htaccess rewrite
$route  = trim($_GET['_route'] ?? '', '/');
$parts  = $route !== '' ? explode('/', $route) : [];
$method = $_SERVER['REQUEST_METHOD'];

// ─── Routes ────────────────────────────────────────────────────────────────

// POST /api/auth
if ($method === 'POST' && $parts === ['auth']) {
    $provided = $_SERVER['HTTP_X_ADMIN_PASSWORD'] ?? '';
    if (empty($provided) || $provided !== ADMIN_PASSWORD) {
        jsonResponse(['error' => 'Yanlış şifre. Lütfen tekrar deneyin.'], 401);
    }
    jsonResponse(['ok' => true]);
}

// GET /api/plants
if ($method === 'GET' && $parts === ['plants']) {
    jsonResponse(readDB());
}

// GET /api/plants/:city
if ($method === 'GET' && count($parts) === 2 && $parts[0] === 'plants') {
    $city = strtoupper(urldecode($parts[1]));
    $db   = readDB();
    jsonResponse($db[$city] ?? []);
}

// POST /api/plants/:city
if ($method === 'POST' && count($parts) === 2 && $parts[0] === 'plants') {
    requireAuth();
    $city = strtoupper(urldecode($parts[1]));
    $body = json_decode(file_get_contents('php://input'), true) ?: [];

    $ad      = trim($body['ad'] ?? '');
    $latince = trim($body['latince'] ?? '');
    $yoresel = trim($body['yoresel'] ?? '');
    $amac    = trim($body['amac'] ?? '');

    if ($ad === '' || $latince === '') {
        jsonResponse(['error' => 'Bitki adı ve latince adı zorunludur.'], 400);
    }

    $db = readDB();
    if (!isset($db[$city])) $db[$city] = [];

    $plant = [
        'ad'          => $ad,
        'yoresel'     => $yoresel,
        'latince'     => $latince,
        'amac'        => $amac,
        'addedByUser' => true,
    ];
    $db[$city][] = $plant;
    writeDB($db);
    jsonResponse($plant, 201);
}

// DELETE /api/plants/:city/:index
if ($method === 'DELETE' && count($parts) === 3 && $parts[0] === 'plants') {
    requireAuth();
    $city = strtoupper(urldecode($parts[1]));
    $idx  = (int) $parts[2];
    $db   = readDB();

    if (!isset($db[$city][$idx])) {
        jsonResponse(['error' => 'Bitki bulunamadı'], 404);
    }

    $removed = $db[$city][$idx];
    array_splice($db[$city], $idx, 1);
    if (empty($db[$city])) unset($db[$city]);
    writeDB($db);
    jsonResponse($removed);
}

// ─── Fallback ──────────────────────────────────────────────────────────────
jsonResponse(['error' => 'Geçersiz istek', 'route' => $route, 'parts' => $parts], 404);
