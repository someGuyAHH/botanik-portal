import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath  = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Copy .htaccess (SPA routing) into dist/
fs.copyFileSync(
  path.join(root, "server/php/.htaccess"),
  path.join(root, "dist/.htaccess")
);

// Copy api/ (PHP backend) into dist/api/
copyDir(
  path.join(root, "server/php/api"),
  path.join(root, "dist/api")
);

console.log("✓ PHP files copied to dist/");
console.log("");
console.log("Upload the contents of dist/ to your Plesk web root (httpdocs/).");
console.log("Then open dist/api/config.php and set your ADMIN_PASSWORD.");
console.log("Make sure dist/api/db.json is writable by the web server.");
