---
name: daiane-content-quality-control
description: Controle de qualidade final de qualquer peça da Daiane Menandro (@daianemenandro.psi) antes de ser entregue para publicação manual: revisão textual (ortografia, gramática, clareza), revisão visual (marca, legibilidade, dimensões), consistência e checagem de erros. Use sempre como último passo de legendas, carrosséis, stories, roteiros e capas, e quando a usuária pedir para revisar ou conferir uma peça.
---

# Controle de qualidade

Último filtro antes da entrega. Pressupõe que `daiane-health-ethics-review` já aprovou o conteúdo; se não aprovou, pare e rode essa revisão antes.

## 1. Texto (legenda, telas, roteiro)

- [ ] Ortografia e gramática do português do Brasil (acentos, crase, concordância). Use `copy-editing` para uma passada de enxugar e corrigir sem reescrever a voz.
- [ ] Erros recorrentes do perfil: "Agenda" → **"Agende"** sua consulta; `#neurodicergente` → **`#neurodivergente`**; handle sempre **`@daianemenandro.psi`** (nunca `@psicanalistadaianemenandro`, `@psicanalista_daianemenandro` nem `@daianemenandro_psicanalista`).
- [ ] Gancho na primeira linha, até ~125 caracteres.
- [ ] Um único CTA, coerente com o objetivo. Post de serviço termina com "📅 Agende pelo link da bio".
- [ ] 3–5 hashtags, escritas corretamente, sem hashtag proibida ou restrita.
- [ ] Sem marcas de texto de IA (rode `ig-humanizer` em modo revisão).
- [ ] Texto das telas = texto do roteiro aprovado (nenhuma divergência entre arte e legenda).
- [ ] Links e endereços conferidos: `daianemenandro.pages.dev/links` e âncoras `#agenda`, `#eventos`, `#criancas`, `#valores`, `#descubra`, `#duvidas`.
- [ ] Datas, horários e dias da semana de eventos conferidos com o site ou com a Daiane.

## 2. Visual (cada PNG)

- [ ] Dimensões exatas: `node .claude/skills/daiane-carousel-design/scripts/check-png.mjs <pasta> 1080 1350` (ou 1080 1920).
- [ ] Abra e olhe **cada** imagem. Nada cortado, sobreposto, fora da margem, com fonte trocada (fallback Arial/Georgia = fonte não carregou) ou ilegível.
- [ ] Paleta, tipografia, lótus e rodapé conforme `daiane-brand-identity` (checklist dela).
- [ ] Contraste suficiente; nenhum texto corrido em dourado sobre creme.
- [ ] Tela 1 legível em miniatura (imagine a 1/3 da largura).
- [ ] Story: nada essencial nos 250 px de cima e de baixo. Capa de destaque: conteúdo dentro do círculo central.
- [ ] Nenhuma pessoa identificável sem autorização (pacientes, crianças).
- [ ] Arquivo leve (≤ 8 MB por imagem) e nomeado em ordem (`1.png`, `2.png`...).

## 3. Consistência com o perfil

- [ ] Pilar e formato coerentes com o calendário (`daiane-instagram-strategy`).
- [ ] A grade continua variada (não 3 peças seguidas do mesmo formato ou cor de fundo).
- [ ] Nada se refere ao perfil pessoal nem leva até ele.

## Saída

```
QC: [PRONTO PARA PUBLICAR MANUALMENTE | CORRIGIR]
Texto: ✓/✗ + itens
Visual: ✓/✗ + itens (arquivo e problema)
Consistência: ✓/✗ + itens
Correções feitas: (o que foi ajustado nesta revisão)
```

Corrija o que for objetivo (erro de digitação, dimensão, margem) e reexporte. Para decisões de conteúdo, devolva com a sugestão. Mesmo com "PRONTO", a publicação é feita por uma pessoa: nunca publique nem agende.
