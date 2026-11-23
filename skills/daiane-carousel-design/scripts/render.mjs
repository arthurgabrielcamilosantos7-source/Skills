// Exporta cada <section class="slide"> de um HTML para PNG no tamanho exato, usando o agent-browser.
// Uso: node render.mjs <arquivo.html> [pasta-de-saida] [largura] [altura]
// Padrão: saída na mesma pasta do HTML, 1080x1350. Story/capa: 1080 1920.
// Não acessa a internet nem publica nada: só abre o arquivo local e tira prints.
import { execFileSync } from "node:child_process";
import { readFileSync, mkdirSync, existsSync } from "node:fs";
import { resolve, dirname, join } from "node:path";
import { pathToFileURL } from "node:url";

const [, , html, outArg, wArg, hArg] = process.argv;
if (!html || !existsSync(html)) {
  console.error("Uso: node render.mjs <arquivo.html> [pasta-de-saida] [largura] [altura]");
  process.exit(1);
}
const file = resolve(html);
const out = resolve(outArg || dirname(file));
const W = Number(wArg || 1080), H = Number(hArg || 1350);
mkdirSync(out, { recursive: true });

const total = (readFileSync(file, "utf8").replace(/<!--[\s\S]*?-->/g, "").match(/<section class="slide/g) || []).length;
if (!total) { console.error("Nenhum <section class=\"slide\"> encontrado."); process.exit(1); }

// Chama o agent-browser instalado globalmente pelo npm, via node e sem shell (caminhos com espaço funcionam).
const roots = [
  process.env.APPDATA && join(process.env.APPDATA, "npm", "node_modules"),
  join(dirname(process.execPath), "node_modules"),
  join(dirname(process.execPath), "..", "lib", "node_modules"),
].filter(Boolean);
let abJs = roots.map((r) => join(r, "agent-browser", "bin", "agent-browser.js")).find(existsSync);
if (!abJs) {
  const npmRoot = execFileSync(process.platform === "win32" ? "npm root -g" : "npm root -g", { shell: true }).toString().trim();
  abJs = join(npmRoot, "agent-browser", "bin", "agent-browser.js");
}
if (!existsSync(abJs)) { console.error("agent-browser não encontrado. Instale: npm install -g agent-browser && agent-browser install"); process.exit(1); }
const ab = (...args) => execFileSync(process.execPath, [abJs, "--session", "daiane-render", ...args], { stdio: ["ignore", "pipe", "inherit"] }).toString();

const base = pathToFileURL(file).href;
ab("open", base + "#1");
ab("set", "viewport", String(W), String(H), "1");
for (let i = 1; i <= total; i++) {
  ab("open", `${base}#${i}`);
  ab("wait", "600");
  const png = join(out, `${i}.png`);
  ab("screenshot", png);
  console.log(png);
}
ab("close");
console.log(`${total} telas exportadas em ${out}. Confira com: node check-png.mjs ${out} ${W} ${H}`);
