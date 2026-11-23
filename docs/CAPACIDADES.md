# Capacidades globais do Claude Code (auditoria de 23/11/2026)

Tudo abaixo vale para **todos os projetos**: as skills ficam em `~/.claude/skills/` e os plugins estão instalados no escopo de usuário (`~/.claude/settings.json`). Backup do estado anterior: `C:\Users\dspar\.claude\backups\pre-capabilities-2026-11-23\`.

## Instalado e testado

Teste "reconhecida" = aparece na lista de skills/comandos do Claude Code. Teste "acionamento" = um subagente recebeu um pedido realista e escolheu e carregou a skill sozinho.

| Nome | Categoria | Repositório | Licença | Escopo | Dependências | Teste | Resultado | Benefício |
|---|---|---|---|---|---|---|---|---|
| claude-code-setup | Plugin / setup | anthropics/claude-plugins-official | Apache-2.0 | usuário | — | reconhecido | ok | Recomenda hooks, skills e MCP por projeto |
| plugin-dev | Plugin / dev | anthropics/claude-plugins-official | Apache-2.0 | usuário | — | reconhecido (7 skills, 3 agentes) | ok | Criar plugins, hooks, agentes |
| feature-dev | Plugin / dev | anthropics/claude-plugins-official | Apache-2.0 | usuário | — | reconhecido (3 agentes) | ok | Fluxo guiado de nova funcionalidade |
| code-review | Plugin / qualidade | anthropics/claude-plugins-official | Apache-2.0 | usuário | gh | reconhecido | ok | Revisão de PR com vários agentes |
| code-simplifier | Plugin / qualidade | anthropics/claude-plugins-official | Apache-2.0 | usuário | — | reconhecido | ok | Simplifica código recém-escrito |
| pr-review-toolkit | Plugin / qualidade | anthropics/claude-plugins-official | Apache-2.0 | usuário | gh | reconhecido (6 agentes) | ok | Testes, erros silenciosos, tipos, comentários |
| commit-commands | Plugin / git | anthropics/claude-plugins-official | Apache-2.0 | usuário | git, gh | reconhecido | ok | /commit, /commit-push-pr |
| frontend-design | Design | anthropics/skills | Apache-2.0 | usuário | — | reconhecida | ok | Direção estética de interfaces |
| theme-factory | Design | anthropics/skills | Apache-2.0 | usuário | — | reconhecida | ok | 10 temas prontos para slides/páginas |
| algorithmic-art | Design | anthropics/skills | Apache-2.0 | usuário | — | reconhecida | ok | Arte generativa com p5.js |
| doc-coauthoring | Documentos | anthropics/skills | Apache-2.0 | usuário | — | reconhecida | ok | Escrita estruturada de documentos |
| verification-before-completion | Qualidade | obra/superpowers | MIT | usuário | — | reconhecida | ok | Só diz "pronto" com prova |
| receiving-code-review | Qualidade | obra/superpowers | MIT | usuário | — | reconhecida | ok | Avalia feedback antes de aplicar |
| diagnosing-bugs | Debugging | mattpocock/skills | MIT | usuário | — | reconhecida | ok | Reproduz, levanta hipóteses, testa |
| tdd | Testes | mattpocock/skills | MIT | usuário | — | reconhecida | ok | Red-green-refactor |
| codebase-design | Arquitetura | mattpocock/skills | MIT | usuário | — | reconhecida | ok | Módulos profundos, interfaces |
| property-based-testing | Testes | trailofbits/skills | CC-BY-SA-4.0 | usuário | Hypothesis / fast-check | reconhecida | ok | Testes por propriedade |
| sharp-edges | Segurança | trailofbits/skills | CC-BY-SA-4.0 | usuário | — | reconhecida | ok | APIs e configs perigosas |
| differential-review | Segurança | trailofbits/skills | CC-BY-SA-4.0 | usuário | git | reconhecida | ok | Revisão de segurança de diffs |
| api-design-principles | APIs | wshobson/agents | MIT | usuário | — | reconhecida | ok | REST/GraphQL |
| postgresql-table-design | Banco de dados | wshobson/agents | MIT | usuário | — | reconhecida | ok | Esquemas PostgreSQL |
| scientific-critical-thinking | Pesquisa | K-Dense-AI/scientific-agent-skills | MIT | usuário | — | reconhecida | ok | Avaliação de evidências e vieses |
| market-research-reports | Pesquisa | K-Dense-AI/scientific-agent-skills | MIT | usuário | — | reconhecida | ok | Mercado com fontes rastreáveis |
| ui-ux-pro-max | Design / UI | nextlevelbuilder/ui-ux-pro-max-skill | MIT | usuário | Python 3 | rodei `search.py` (paleta "spa") | ok | Paletas, fontes, regras de UX |
| source-verification | Pesquisa (própria) | este repositório | MIT | usuário | — | acionamento | ok | Checagem de fatos na web |
| automation-design | Automação (própria) | este repositório | MIT | usuário | — | acionamento | ok | Desenho seguro de automações |
| strategic-planning | Planejamento (própria) | este repositório | MIT | usuário | — | acionamento | ok | Meta → estratégia → plano |
| visual-quality-review | Design (própria) | este repositório | MIT | usuário | navegador | acionamento | ok | Revisão visual com correções |
| ~/.claude/CLAUDE.md | Roteamento | este repositório (`global/CLAUDE.md`) | MIT | usuário | — | criado (não existia) | ok | Mapa curto tarefa → skills |

## Instalado, mas não testado (precisam de programas extras)

| Nome | Repositório | Licença | O que falta |
|---|---|---|---|
| web-artifacts-builder | anthropics/skills | Apache-2.0 | bash + pnpm; o script instala pacotes npm quando roda |
| webapp-testing | anthropics/skills | Apache-2.0 | `pip install playwright` e `playwright install chromium` |
| supply-chain-risk-auditor | trailofbits/skills | CC-BY-SA-4.0 | `uv`; consulta osv.dev, npm, PyPI, deps.dev, scorecard.dev e api.github.com (usa seu token do gh só lá) |
| statistical-analysis, exploratory-data-analysis | K-Dense-AI | MIT | Python com pandas/scipy/statsmodels |
| citation-management | K-Dense-AI | MIT | Python; consulta OpenAlex, PubMed, Crossref, DataCite, arXiv |

Alteração feita nas 5 skills da K-Dense: removi a seção final "Citing Scientific Agent Skills", que mandava o Claude incluir o artigo dos autores nos seus relatórios. No `ui-ux-pro-max` troquei `CLAUDE_PLUGIN_ROOT` por `CLAUDE_SKILL_DIR` para os scripts funcionarem como skill avulsa. Ambas as mudanças estão registradas em `sources.json`.

## Já disponível (não duplicado)

skill-creator, docx, pdf, pptx, xlsx, deep-research e dataviz já vêm embutidos no app. /code-review, /security-review e /simplify também são nativos. canvas-design e as skills de marketing estão sendo adicionadas por outra sessão.

## Recomendado, aguardando autorização

| Nome | Por que espera |
|---|---|
| hookify (plugin) | Roda `python3` em toda ação. Neste Windows, `python3` é o atalho da Microsoft Store e falharia sempre. Desligue o alias em Configurações > Aplicativos > Configurações avançadas > Aliases de execução, depois instale. |
| security-guidance (plugin) | Avisos em cada edição e revisão de diff por LLM ao final de cada resposta: custo extra em toda sessão. |
| pyright-lsp, typescript-lsp (plugins) | Precisam de `npm i -g pyright` / `typescript-language-server typescript`. |
| FreeLLMAPI | Ver seção abaixo. Precisa de Docker (não instalado) e da sua decisão. |

## Rejeitado

| Nome | Motivo |
|---|---|
| brand-guidelines (anthropics) | Aplica a identidade visual da própria Anthropic; atrapalharia suas marcas. |
| systematic-debugging, test-driven-development, brainstorming, writing-plans, executing-plans (superpowers) | Duplicam diagnosing-bugs, tdd, grilling, to-spec/to-tickets; brainstorming sobe servidor Node local. |
| modern-python (trailofbits) | O plugin bloqueia `pip`/`python` com hooks. |
| semgrep, codeql, second-opinion (trailofbits) | Dependem de ferramentas externas; sobrepõem /security-review. |
| literature-review, markitdown (K-Dense) | Duplicam deep-research e pdf/docx; figuras exigem chave paga. |
| design/brand/banner (ui-ux-pro-max) | Exigem chave do Gemini. |
| ComposioHQ awesome-claude-skills | Sem licença; pode mover/apagar arquivos. |
| Skills genéricas do wshobson (python-testing-patterns etc.) | Conhecimento que o Claude já tem. |

## FreeLLMAPI (tashfeenahmed/freellmapi) — auditado, NÃO instalado

Veredito: **código sem sinais de malware ou telemetria, mas arriscado para seus dados.** Licença MIT, ~7 meses, 1.153 commits, 147 autores, mantenedor único.

Riscos principais (verificados no código):
- Numa instalação nova, liga sozinho provedores sem chave, como o **AI Horde**, onde voluntários anônimos veem seus prompts (`server/src/services/keyless-defaults.ts`).
- Rodando com node, escuta em todas as interfaces (`host: '::'`, `server/src/lib/config.ts:84`), ao contrário do que diz o SECURITY.md.
- O comando `setup-claude` reescreve `~/.claude/settings.json` (URL, token e modelos padrão).
- Fala com `api.freellmapi.co` a cada 12h (catálogo assinado; desligável) e com api.github.com.
- Os provedores gratuitos podem usar seus dados para treinar modelos; a qualidade é bem menor que a do Claude; e o modo auto do Claude Code perde a checagem de segurança da Anthropic.
- O instalador oficial é `curl | bash` de um script fora do repositório: não auditável.

Benefício: um endpoint compatível com a API da Anthropic (`/v1/messages`) que usa modelos grátis, útil só para tarefas sem dados sensíveis. Custo: zero em dinheiro, mas pago em privacidade e qualidade.

Instalação isolada sugerida (não executada): Docker Desktop, cópia do commit auditado `ef97f505` numa pasta própria, `.env` com `HOST_BIND=127.0.0.1`, `ALLOWED_HOSTS=localhost`, `CATALOG_SYNC_DISABLED=1`, `FREELLMAPI_UPDATE_CHECK=off`, remover os provedores sem chave no painel, e um script `.ps1` que define `ANTHROPIC_BASE_URL` só naquela janela de terminal. Nunca usar `setup-claude`, `launch`, o perfil `autoupdate` (Watchtower) ou o `curl | bash`.

## Consumo de contexto

- Skills: as descrições de 38 skills somam ~4.500 tokens por sessão; o conteúdo completo só carrega quando a skill é usada.
- Plugins: ~3.400 tokens por sessão no total (plugin-dev ~1.700 e pr-review-toolkit ~1.270 são os maiores).
- `~/.claude/CLAUDE.md`: ~400 tokens.

## Atualizar

- Skills da biblioteca: recopie da fonte (repo e caminho em `sources.json`), atualize o commit, rode `node scripts/build-catalog.mjs` e `scripts\install.ps1 -Only <nome>`.
- Plugins: `claude plugin marketplace update claude-plugins-official` e `claude plugin update <nome>@claude-plugins-official`.

## Desinstalar

- Uma skill: apague `~/.claude/skills/<nome>` (e, se quiser, `skills/<nome>` aqui e a entrada em `sources.json`).
- Um plugin: `claude plugin uninstall <nome>@claude-plugins-official` ou `claude plugin disable <nome>@claude-plugins-official`.
- O marketplace: `claude plugin marketplace remove claude-plugins-official`.
- O guia global: apague `~/.claude/CLAUDE.md`.
- Voltar tudo ao estado anterior: copie de volta `settings.json` e a pasta `skills` do backup.
