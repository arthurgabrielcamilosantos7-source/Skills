---
name: skill-library
description: Personal skills library (GitHub arthurgabrielcamilosantos7-source/Skills, local clone at C:\Users\dspar\OneDrive\Desktop\python\skills claude). Use at the start of any non-trivial task to check whether a skill in the library fits it, and whenever the user asks to install, add, save, update or find a skill, so the new skill is stored in the library and pushed to GitHub.
---

# Skill library

The library is a git repo. Local clone: `C:\Users\dspar\OneDrive\Desktop\python\skills claude`
Remote: https://github.com/arthurgabrielcamilosantos7-source/Skills

Layout:
- `skills/<name>/SKILL.md`: one folder per skill, copied verbatim from its source
- `CATALOG.md`: table of every skill with its description (generated)
- `sources.json`: where each skill came from (repo, path, commit, license, requirements)
- `licenses/`: the upstream license files
- `scripts/build-catalog.mjs`: regenerates `CATALOG.md`
- `scripts/install.ps1`: copies the skills into `~/.claude/skills`

## Finding a skill for a task

1. Read `CATALOG.md` in the local clone (if the clone is missing, read it from the GitHub repo).
2. If a listed skill fits the task, read its `SKILL.md` and follow it. If it is not yet in `~/.claude/skills`, install it with `scripts/install.ps1 -Only <name>`.
3. If nothing in the library fits, use the `find-skills` skill to search skills.sh, then offer the best match to the user and add it with the steps below if they agree.

## Adding a skill

1. Get it from its original source (clone the repo into the scratchpad; prefer the author's own repo over mirrors). Read the SKILL.md and any scripts before adding it.
2. Copy the skill folder into `skills/<name>/` (folder name = the `name` in its frontmatter). Also copy any sibling skills it references (for example `../other-skill/SKILL.md`).
3. Add an entry to `sources.json` (repo, path, short commit, license, and `requires` if it needs a CLI or other setup). Copy the upstream LICENSE into `licenses/<owner>-<repo>.LICENSE` if it is not there yet. Do not add a skill whose source has no license allowing redistribution; install it only locally and tell the user.
4. Run `node scripts/build-catalog.mjs`.
5. Install it: `powershell -ExecutionPolicy Bypass -File scripts/install.ps1 -Only <name>` (global), or add `-Project "<project path>"` to install only in that project's `.claude/skills` (preferred for project-specific or niche skills). Skills that reference `../../references/` need the library's `references/` folder, which the script copies too.
6. Commit (`Add <name> skill`) and push to `main`.

## Updating skills

Re-copy from the source repo, update the commit in `sources.json`, rebuild the catalog, reinstall, commit and push.
