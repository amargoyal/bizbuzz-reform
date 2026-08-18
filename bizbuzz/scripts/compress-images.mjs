import sharp from "sharp";
import { readdir, stat, rename } from "node:fs/promises";
import path from "node:path";

const ROOT = new URL("../public", import.meta.url).pathname;
const MIN_BYTES = 400 * 1024;
const MAX_WIDTH = 2400;
const JPEG_QUALITY = 82;

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

let before = 0;
let after = 0;
let count = 0;

for await (const file of walk(ROOT)) {
  const ext = path.extname(file).toLowerCase();
  if (![".jpg", ".jpeg", ".png"].includes(ext)) continue;
  const { size } = await stat(file);
  if (size < MIN_BYTES) continue;

  const tmp = file + ".tmp";
  const img = sharp(file).rotate().resize({ width: MAX_WIDTH, withoutEnlargement: true });
  if (ext === ".png") {
    await img.png({ compressionLevel: 9, effort: 7 }).toFile(tmp);
  } else {
    await img.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toFile(tmp);
  }

  const newSize = (await stat(tmp)).size;
  if (newSize < size) {
    await rename(tmp, file);
    before += size;
    after += newSize;
    count++;
    console.log(
      `${path.relative(ROOT, file)}: ${(size / 1e6).toFixed(1)}MB -> ${(newSize / 1e6).toFixed(1)}MB`
    );
  } else {
    await rename(tmp, file + ".skip");
    const { unlink } = await import("node:fs/promises");
    await unlink(file + ".skip");
  }
}

console.log(
  `\n${count} files: ${(before / 1e6).toFixed(0)}MB -> ${(after / 1e6).toFixed(0)}MB`
);
