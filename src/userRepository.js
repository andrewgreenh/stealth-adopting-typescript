import fs_ from "fs";
import { join } from "path";

const fs = fs_.promises;

const dbPath = join(__dirname, "../data.json");

export async function loadUsers() {
  await ensureDB();
  const dbContentBuffer = await fs.readFile(dbPath);
  return JSON.parse(dbContentBuffer.toString());
}

export async function saveUsers(users) {
  await ensureDB();
  await fs.writeFile(
    dbPath,
    JSON.stringify(users, null, 2)
  );
}

async function ensureDB() {
  const exists = await fs
    .stat(dbPath)
    .then(() => true)
    .catch(() => false);
  if (!exists) await fs.writeFile(dbPath, "[]");
}
