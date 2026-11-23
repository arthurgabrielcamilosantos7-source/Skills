---
name: daiane-brand-identity
description: Identidade visual da marca Daiane Menandro (Instagram profissional @daianemenandro.psi). Use antes de criar ou revisar qualquer arte, carrossel, story, capa de destaque, reel cover, apresentação ou material visual da Daiane, e sempre que outra skill de design (canvas-design, design-and-templates, quote-cards-and-text-graphics, visual-design-foundations) for usada neste projeto. Define paleta, tipografia, logo (lótus dourada), direção de arte e regras de consistência.
---

# Identidade visual: Daiane Menandro

Esta skill é a fonte da verdade visual do projeto. Outras skills de design genéricas trazem paletas, fontes e estilos próprios: **neste projeto, esta skill tem prioridade sobre elas**. Se uma skill externa sugerir algo que contradiz esta página, siga esta página e diga o porquê.

Escopo: só o Instagram profissional **@daianemenandro.psi**. Nunca produza nada para @daianemenandro_psicanalista (perfil pessoal).

## Personalidade

Acolhedora, delicada, humana, elegante, profissional, leve.

| Evite | Por quê |
|---|---|
| Excesso de dourado, brilho, mármore, texturas "luxo" | Fica caro e distante; a marca é acolhimento, não ostentação |
| Cores saturadas, rosa-bebê, ilustrações fofas, emojis grandes na arte | Infantiliza (mesmo nos temas de crianças, o público é o adulto que cuida) |
| Cinza frio, azul hospitalar, ícones de cérebro 3D, banco de imagem "clínica" | Esfria e torna genérico |
| Templates prontos do Canva sem adaptação | Genérico, perde a assinatura da marca |

## Paleta

| Token | Hex | Uso |
|---|---|---|
| `--marrom` | `#4A2A1A` | Texto principal, títulos sobre fundo claro |
| `--escuro` | `#2E1E16` | Fundo de story/slide escuro (variação do marrom) |
| `--dourado` | `#C9A15A` | Lótus, fios, números, sobretítulos, bordas finas. **Detalhe, não fundo** |
| `--dourado-claro` | `#E2C48A` | Destaque de texto sobre fundo escuro |
| `--creme` | `#F5EAE0` | Fundo principal |
| `--off` | `#FBF6F1` | Fundo alternativo, cartões sobre creme |
| `--vinho` | `#7A1E3A` | Bordô: ênfase pontual (palavra em itálico, botão de ação). No máximo 1 elemento por peça |

Proporção de referência por peça: ~70% creme/off, ~20% marrom (texto), ≤10% dourado + bordô.

Contraste (WCAG para texto): marrom sobre creme ≈ 11:1 ✅; creme sobre escuro ✅; **dourado sobre creme ≈ 2:1 ❌ para texto corrido**: dourado só em sobretítulos grandes (≥ 28 px, peso 600, caixa alta) ou elementos decorativos. Bordô sobre creme ✅.

## Tipografia

| Fonte | Papel | Regras |
|---|---|---|
| **Playfair Display** 500 (normal e itálico) | Títulos | Itálico em bordô para a palavra-chave do título. Entrelinha 1.05–1.15 |
| **Montserrat** (400–600) | Texto, sobretítulos, rodapé | Sobretítulo: 600, caixa alta, `letter-spacing .2em`, dourado. Corpo: 400, entrelinha 1.5 |
| **Great Vibes** | Assinatura "Daiane Menandro", 1 palavra decorativa | **Só detalhe discreto**, nunca frase inteira, nunca texto informativo, no máximo 1 por peça |
| Cormorant Garamond itálico | Citação curta (opcional) | Alternativa ao Playfair itálico em frases citadas |

Tamanhos mínimos em 1080 px de largura: título ≥ 64 px, corpo ≥ 34 px, rodapé ≥ 24 px. No feed o post aparece com ~1/3 da largura: abaixo disso fica ilegível.

Arquivos das fontes (WOFF2, licença OFL): `instagram-artes/_fonte/` na raiz do projeto.

## Logo: lótus dourada

- Arquivo: `instagram-artes/_fonte/logo.svg` (traço, sem preenchimento, `stroke #C9A15A`, `stroke-width 1.7`, viewBox `0 0 64 50`).
- Use sempre o traço original. Não preencha, não aplique gradiente, sombra ou 3D, não distorça.
- Sobre fundo escuro: mesmo traço em dourado ou dourado-claro.
- Área de respiro: no mínimo metade da altura da lótus em volta.

## Assinatura padrão (rodapé)

Toda peça de feed leva o rodapé: lótus pequena (≈70 px) à esquerda + `@daianemenandro.psi` à direita, Montserrat 26 px, marrom, a 80 px da borda inferior. Quando houver espaço: "Daiane Menandro · Psicanalista Clínica". Nunca outro handle.

## Direção de arte

- **Composição:** muito respiro (margens laterais ≥ 100 px), uma ideia por tela, alinhamento à esquerda para texto, centro só para capas e frases curtas.
- **Elementos:** fio dourado com gradiente (`linear-gradient(90deg,transparent,#C9A15A,transparent)`), círculos de borda dourada para números, cantos arredondados grandes em fotos (ex.: `border-top-left-radius:300px`).
- **Fotos:** a Daiane real, luz natural, tons quentes. Fotos dela estão em `instagram-artes/_fonte/` e `analise-instagram/imagens/`. Não use foto de pacientes nem de crianças identificáveis.
- **Imagens geradas por IA:** evite rostos e cenas clínicas geradas por IA. Se usar qualquer elemento gerado por IA, mantenha o rótulo "Conteúdo gerado por IA" do Instagram ligado no post.
- **Formatos:** feed/carrossel 1080×1350 (4:5); story/reel cover 1080×1920 (9:16; deixe 250 px livres em cima e embaixo para a interface); capa de destaque 1080×1920 com a lótus/ícone dentro de um círculo central (~620 px).

## Modelo de referência

`instagram-artes/_fonte/arte.html` já implementa estes tokens (`:root`), o rodapé, a capa de destaque e o carrossel "Como agendar". Comece por ele ou pelo modelo da skill `daiane-carousel-design` em vez de criar um estilo do zero.

## Checklist rápido

- [ ] Só cores da paleta (nenhum hex fora da tabela)
- [ ] Playfair nos títulos, Montserrat no texto, Great Vibes só como detalhe
- [ ] Bordô em no máximo 1 elemento
- [ ] Rodapé com lótus + `@daianemenandro.psi`
- [ ] Contraste de texto ok (nada de texto corrido em dourado sobre creme)
- [ ] Parece acolhedor e profissional, não luxuoso, infantil, frio ou genérico
