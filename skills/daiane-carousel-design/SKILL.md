---
name: daiane-carousel-design
description: Diretor(a) de arte e designer de carrosséis, posts, stories e capas de destaque da Daiane Menandro (@daianemenandro.psi). Use para criar ou refazer qualquer peça visual em PNG para o Instagram profissional: organiza as telas, aplica hierarquia e legibilidade, monta a arte em HTML editável com a identidade da marca, exporta em tamanho exato e revisa. Combina daiane-brand-identity, canvas-design, visual-design-foundations e agent-browser.
---

# Carrosséis e artes

As artes são **HTML editável → PNG**. Isso garante consistência (mesmos tokens, fontes e rodapé em todas as peças), permite corrigir uma palavra sem refazer a arte, e cada carrossel vira um modelo reutilizável.

Pré-requisitos: Node.js e `agent-browser` (com `agent-browser install` já rodado). Fontes e logo em `instagram-artes/_fonte/`.

## Fluxo

1. **Briefing** (curto): objetivo (salvar/compartilhar/agendar), pilar, público, mensagem central. Pegue o texto de `daiane-content-writer`. Se o texto não passou por `daiane-health-ethics-review`, passe antes de desenhar.
2. **Roteiro de telas** (tabela): nº | papel (gancho, ideia, síntese, CTA) | título | apoio | elemento visual. 5 a 8 telas é o ideal; no máximo 10.
3. **Montagem:**
   - Crie a pasta `instagram-artes/<aaaa-mm-dd>-<tema>/`.
   - Copie `assets/carrossel-modelo.html` desta skill para `instagram-artes/<pasta>/carrossel.html`.
   - Edite só as `<section class="slide">`. Classes de fundo: padrão (creme), `off`, `escuro`. Elementos prontos: `.olho`, `h1`, `h2` com `<em>` (bordô), `.num`, `.fio`, `.btn`, `.assin`, `.seta`. O rodapé com lótus e `@daianemenandro.psi` entra sozinho.
   - Novos estilos: só com os tokens de `:root` (veja `daiane-brand-identity`). Para decisões de hierarquia, espaçamento e tipografia, consulte `visual-design-foundations`; para peças mais autorais (capa de evento, cartaz), a filosofia de composição de `canvas-design`, sempre limitada à paleta e às fontes da marca.
4. **Exportar:**
   ```
   node <esta-skill>/scripts/render.mjs instagram-artes/<pasta>/carrossel.html
   ```
   Gera `1.png`, `2.png`... na mesma pasta, 1080×1350. Para story/capa de destaque use `... carrossel.html <saida> 1080 1920` com slides de 1920 px de altura.
5. **Conferir:** `node <esta-skill>/scripts/check-png.mjs instagram-artes/<pasta> 1080 1350` e **olhe cada PNG** (leia a imagem). Depois rode `daiane-content-quality-control`.
6. **Entrega:** pasta com HTML + PNGs + legenda. Nada é publicado.

## Hierarquia e legibilidade

- Tela 1 (gancho) é a capa do post na grade: título ≥ 90 px, no máximo 12 palavras, uma palavra em itálico bordô. Teste mental: legível com o post em 1/3 da tela do celular.
- Uma ideia por tela. Título ≤ 8 palavras; apoio ≤ 30 palavras; corpo ≥ 34 px.
- Ordem de leitura: sobretítulo dourado → título → fio → texto. Nunca dois títulos competindo.
- Margens: 100 px nas laterais; nada importante a menos de 150 px do topo ou do rodapé (zona do rodapé/ícones).
- Ritmo: alterne fundo creme e off; use `escuro` só na tela de CTA ou numa tela de virada.
- Indique continuidade: "Arraste →" na tela 1 e numeração `.num` nas telas de lista.
- Fotos da Daiane: no máximo 1 a cada 3 telas, com cantos arredondados grandes. Nada de foto de banco de imagem com rosto.

## Formatos

| Peça | Tamanho | Observação |
|---|---|---|
| Carrossel / post | 1080×1350 | 4:5 |
| Story | 1080×1920 | 250 px livres em cima e embaixo; espaço tracejado para figurinha de link |
| Capa de destaque | 1080×1920 | Ícone dentro do círculo central de ~620 px (o Instagram corta em círculo) |
| Capa de reel | 1080×1920 | Título na faixa central de 1080×1350, que aparece na grade |

O modelo `instagram-artes/_fonte/arte.html` já tem as capas de destaque e o story "Agende": reaproveite.

## Critérios de pronto

- [ ] Passou em `daiane-health-ethics-review` (texto) e `daiane-content-quality-control` (peça)
- [ ] Dimensões exatas confirmadas pelo `check-png.mjs`
- [ ] Todas as telas abertas e olhadas, sem texto cortado ou sobreposto
- [ ] HTML editável salvo junto dos PNGs
