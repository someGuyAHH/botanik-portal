import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DB_PATH = path.join(__dirname, "db.json");

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
if (!ADMIN_PASSWORD) {
  console.warn("WARNING: ADMIN_PASSWORD is not set. Plant additions will be rejected.");
}

function readDB() {
  if (!fs.existsSync(DB_PATH)) {
    fs.writeFileSync(DB_PATH, JSON.stringify({}), "utf-8");
  }
  return JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));
}

function writeDB(data) {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), "utf-8");
}

function requireAuth(req, res, next) {
  const provided = req.headers["x-admin-password"] || "";
  if (!ADMIN_PASSWORD || provided !== ADMIN_PASSWORD) {
    return res.status(401).json({ error: "Yanlış şifre. Lütfen tekrar deneyin." });
  }
  next();
}

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/auth", (req, res) => {
  const provided = req.headers["x-admin-password"] || "";
  if (!ADMIN_PASSWORD || provided !== ADMIN_PASSWORD) {
    return res.status(401).json({ error: "Yanlış şifre. Lütfen tekrar deneyin." });
  }
  res.json({ ok: true });
});

app.get("/api/plants", (req, res) => {
  res.json(readDB());
});

app.get("/api/plants/:city", (req, res) => {
  const db = readDB();
  const city = req.params.city.toUpperCase();
  res.json(db[city] || []);
});

app.post("/api/plants/:city", requireAuth, (req, res) => {
  const db = readDB();
  const city = req.params.city.toUpperCase();
  const { ad, yoresel, latince, amac } = req.body;

  if (!ad || !latince) {
    return res.status(400).json({ error: "Bitki adı ve latince adı zorunludur." });
  }

  if (!db[city]) db[city] = [];
  const plant = { ad, yoresel: yoresel || "", latince, amac: amac || "", addedByUser: true };
  db[city].push(plant);
  writeDB(db);
  res.status(201).json(plant);
});

app.delete("/api/plants/:city/:index", requireAuth, (req, res) => {
  const db = readDB();
  const city = req.params.city.toUpperCase();
  const idx = parseInt(req.params.index, 10);

  if (!db[city] || !db[city][idx]) {
    return res.status(404).json({ error: "Bitki bulunamadı" });
  }
  const removed = db[city].splice(idx, 1);
  if (db[city].length === 0) delete db[city];
  writeDB(db);
  res.json(removed[0]);
});

app.listen(3001, "127.0.0.1", () => {
  console.log("Backend API: http://127.0.0.1:3001");
});
