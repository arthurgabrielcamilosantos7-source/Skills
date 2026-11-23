// Confere as dimensões e o tamanho de todos os PNG de uma pasta (ou de um arquivo).
// Uso: node check-png.mjs <pasta-ou-arquivo> [largura] [altura]
// Sai com código 1 se algum arquivo não tiver o tamanho esperado.
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, extname } from "node:path";

const [, , target, wArg, hArg] = process.argv;
if (!target) { console.error("Uso: node check-png.mjs <pasta-ou-arquivo> [largura] [altura]"); process.exit(1); }
const W = wArg ? Number(wArg) : null, H = hArg ? Number(hArg) : null;
const files = statSync(target).isDirectory()
  ? readdirSync(target).filter((f) => extname(f).toLowerCase() === ".png").sort((a, b) => a.localeCompare(b, undefined, { numeric: true })).map((f) => join(target, f))
  : [target];

let ok = true;
for (const f of files) {
  const b = readFileSync(f);
  if (b.toString("ascii", 1, 4) !== "PNG") { console.log(`✗ ${f}: não é PNG`); ok = false; continue; }
  const w = b.readUInt32BE(16), h = b.readUInt32BE(20), kb = Math.round(b.length / 1024);
  const bad = (W && w !== W) || (H && h !== H);
  const heavy = kb > 8000;
  if (bad || heavy) ok = false;
  console.log(`${bad || heavy ? "✗" : "✓"} ${f}: ${w}x${h}, ${kb} KB${bad ? ` (esperado ${W}x${H})` : ""}${heavy ? " (acima de 8 MB)" : ""}`);
}
if (!files.length) { console.log("Nenhum PNG encontrado."); ok = false; }
process.exit(ok ? 0 : 1);
