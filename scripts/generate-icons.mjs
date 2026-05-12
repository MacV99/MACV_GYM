import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const svg = fs.readFileSync(path.join(__dirname, 'icon.svg'));

fs.mkdirSync(path.join(root, 'public', 'icons'), { recursive: true });

await sharp(svg).resize(512, 512).png().toFile(path.join(root, 'public', 'icons', 'icon-512.png'));
await sharp(svg).resize(192, 192).png().toFile(path.join(root, 'public', 'icons', 'icon-192.png'));
await sharp(svg).resize(180, 180).png().toFile(path.join(root, 'public', 'icons', 'apple-touch-icon.png'));

console.log('Icons generated.');
