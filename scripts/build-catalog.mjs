// Gera CATALOG.md a partir do frontmatter de cada skills/<nome>/SKILL.md.
// Uso: node scripts/build-catalog.mjs
import { readdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const skillsDir = join(root, "skills");
const sources = JSON.parse(readFileSync(join(root, "sources.json"), "utf8"));

function frontmatter(text) {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return {};
  const out = {};
  const lines = m[1].split(/\r?\n/);
  for (let i = 0; i < lines.length; i++) {
    const kv = lines[i].match(/^([\w-]+):\s*(.*)$/);
    if (!kv) continue;
    let [, key, val] = kv;
    if (/^[>|]-?$/.test(val)) {
      const parts = [];
      while (i + 1 < lines.length && /^\s+/.test(lines[i + 1])) parts.push(lines[++i].trim());
      val = parts.join(" ");
    }
    out[key] = val.replace(/^["']|["']$/g, "");
  }
  return out;
}

const rows = readdirSync(skillsDir, { withFileTypes: true })
  .filter((d) => d.isDirectory() && existsSync(join(skillsDir, d.name, "SKILL.md")))
  .map((d) => {
    const fm = frontmatter(readFileSync(join(skillsDir, d.name, "SKILL.md"), "utf8"));
    const src = sources[d.name];
    const origin = !src ? "?" : src.repo === "local" ? "local" : `[${src.repo}](https://github.com/${src.repo})`;
    let desc = (fm.description || "").replace(/\|/g, "\\|");
    if (desc.length > 300) desc = desc.slice(0, 297) + "...";
    const manual = fm["disable-model-invocation"] === "true" ? " (manual: `/" + (fm.name || d.name) + "`)" : "";
    return `| [${fm.name || d.name}](skills/${d.name}/SKILL.md)${manual} | ${desc} | ${origin} |`;
  })
  .sort();

const md = `# Catálogo de skills

Gerado por \`node scripts/build-catalog.mjs\`. Não edite à mão.

Total: ${rows.length} skills

| Skill | Quando usar | Origem |
|---|---|---|
${rows.join("\n")}
`;
writeFileSync(join(root, "CATALOG.md"), md);
console.log(`CATALOG.md: ${rows.length} skills`);
