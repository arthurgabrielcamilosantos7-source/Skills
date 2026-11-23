---
name: source-verification
description: Fact-check claims against web, news, company and government sources before relying on them or repeating them. Use when the user asks to verify, fact-check or "confirm" something, when a claim will go into a report, post, decision or code comment, when sources disagree, when a number, quote, date or statistic matters, or when a page looks promotional, AI-generated or out of date. For academic citations and DOIs use citation-management instead.
---

# Source verification

Goal: every claim you pass on has a source the user can open, and you say how sure you are.

## 1. Break the text into checkable claims
List each factual claim separately (who, what, number, date, quote). Skip opinions. Mark the ones that matter most for the user's decision and check those first.

## 2. Find the primary source
For each claim, look for the origin, not a page that repeats it:
- Statistics: the agency, survey or dataset that produced the number (IBGE, Banco Central, World Bank, the company's filing).
- Quotes: the original interview, video, transcript or post.
- Company facts: the company's own site, filings, press releases, product docs.
- Laws and rules: the official gazette or regulator (planalto.gov.br, Diário Oficial, the agency).
- News events: at least two independent outlets that did their own reporting.
If only secondary pages exist, say so.

## 3. Check the source itself
For each source note the publisher, author, publication date and last update, whether it cites its own sources, and possible bias (selling something, advocacy, anonymous, content farm, AI-generated text with no author). A newer primary source beats an older one. Check that the number or quote in the source matches the claim exactly: units, year, population, currency, "up to" versus "average".

## 4. Cross-check
Two sources that copy the same press release count as one. Look for an independent confirmation or a contradiction. If sources disagree, report both and explain the likely reason (different dates, definitions or methods).

## 5. Verdict per claim
Use exactly one of:
- **Confirmado**: a primary source, or two independent reliable sources, agree.
- **Parcialmente correto**: true with a caveat (old number, wrong unit, missing context). State the correction.
- **Não confirmado**: no reliable source either way.
- **Falso**: reliable sources contradict it. Give the correct fact.

## Output
A table: claim | verdict | source (link, publisher, date) | note. Then one line on overall confidence and what would change it. Write in the user's language. Never invent a URL, title or date; if you cannot open a page, say so instead of describing it.
