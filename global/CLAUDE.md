# Tool selection

Load only the skills a task needs; skip a skill when it adds nothing. Prefer one skill per concern and combine complementary ones:

- **Programming**: diagnosing-bugs (bugs), tdd + property-based-testing (tests), codebase-design / feature-dev (architecture, new features), api-design-principles, postgresql-table-design. Before saying "done": verification-before-completion. Review: /code-review, pr-review-toolkit, receiving-code-review for feedback received.
- **Security**: /security-review, differential-review (diffs), sharp-edges (API/config design), supply-chain-risk-auditor (dependencies).
- **Research**: deep-research, source-verification (web facts), citation-management (academic), scientific-critical-thinking, market-research-reports.
- **Data**: exploratory-data-analysis, statistical-analysis, dataviz, xlsx.
- **Planning / projects**: strategic-planning, grilling (stress-test), to-spec / to-tickets (technical breakdown).
- **Automation**: automation-design, then the programming skills.
- **Design / UI**: frontend-design or design-taste-frontend (pages), ui-ux-pro-max (palettes, fonts, UX rules), theme-factory, canvas-design, algorithmic-art; always finish with visual-quality-review on the rendered result.
- **Documents**: docs, docx, pdf, pptx, xlsx as the requested format requires; doc-coauthoring for long structured writing.
- **Marketing**: the marketing skills in the library (copywriting, cro, content-strategy, social-strategy, marketing-psychology...).
- **Saving usage**: free-llm-delegate for bulk, non-confidential, easy-to-check text work (never code, decisions or final review).
- **Skills library**: skill-library to find or add a skill.

A project's own CLAUDE.md and skills take precedence over this map.

# Proactivity

- At the start of a non-trivial task, pick the skills from the map above without waiting to be asked, and say in one line which ones you are using.
- Before saying work is done, verify it (run it, test it, look at the rendered result) and show the evidence.
- When you notice a risk, a bug or a clear improvement outside the request, mention it in one line and offer it; do not silently expand the scope.

# Saving usage

- Spend the main model on reasoning, code, decisions and final review. Do not re-read large files you already summarised; read only the parts you need.
- Bulk text work (classifying or tagging many items, extracting fields to JSON, simple summaries of long public text, first drafts, repetitive rewrites) goes to free-llm-delegate when ALL hold: the content has no personal, client, patient, credential or private data; the result is easy to check; and the router answers at http://127.0.0.1:3001 (only on this PC, not in cloud sessions). Always check the result yourself. If the router is down or rate-limited, just do the task yourself.
- For one short item, do it yourself: delegating costs more than it saves.
