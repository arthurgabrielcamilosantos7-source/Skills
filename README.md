# Skills

Biblioteca pessoal de skills para o Claude Code. Cada skill fica em `skills/<nome>/`. A lista completa, com quando usar cada uma, está em [CATALOG.md](CATALOG.md).

## Instalar em um computador novo

```powershell
git clone https://github.com/arthurgabrielcamilosantos7-source/Skills.git
cd Skills
powershell -ExecutionPolicy Bypass -File scripts\install.ps1
```

Isso copia todas as skills para `~/.claude/skills`, e elas passam a valer em todos os projetos. Abra uma sessão nova do Claude Code para carregá-las.

Algumas skills precisam de programas extras. Esses requisitos estão no campo `requires` de [sources.json](sources.json). Por exemplo, `agent-browser` precisa de `npm install -g agent-browser` e `agent-browser install`.

### Instalar só num projeto

```powershell
powershell -ExecutionPolicy Bypass -File scripts\install.ps1 -Only nome1,nome2 -Project "C:\caminho\do\projeto"
```

Isso copia as skills para `<projeto>\.claude\skills`. A pasta [references/](references/) é usada pelas skills `ig-*` e vai para `<projeto>\.claude\references`. Perfis que já foram preenchidos não são sobrescritos.

## Coleções

- **Instagram e marketing:** `ig-*`, skills de social media, de marketing e de design. Ver o [CATALOG.md](CATALOG.md).
- **Projeto Daiane Menandro:** `daiane-*`, 7 skills exclusivas do Instagram profissional @daianemenandro.psi. São instaladas só no projeto, junto com as 32 skills de apoio listadas em `sources.json` (campo `note`).

## Adicionar skills

A skill `skill-library` ensina o Claude a usar e ampliar esta biblioteca. Basta pedir algo como "instale a skill X" e ele faz o resto: baixa da fonte original, copia para `skills/`, registra em `sources.json`, regenera o catálogo, instala e faz push.

Para fazer à mão:

1. Copie a pasta da skill para `skills/<nome>/`.
2. Registre a origem em `sources.json`.
3. Rode `node scripts/build-catalog.mjs`.
4. Rode `scripts\install.ps1 -Only <nome>`.
5. Faça commit e push.

## Licenças

As skills de terceiros são cópias sem alteração dos repositórios originais, listados em `sources.json`, e mantêm as licenças originais, que estão em [licenses/](licenses/). Os arquivos próprios desta biblioteca (scripts, `skill-library`, README) estão sob a licença MIT.
