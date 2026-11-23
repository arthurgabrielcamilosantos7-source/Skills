---
name: free-llm-delegate
description: Delegate simple, non-confidential bulk text work to free models through the user's local FreeLLMAPI (http://127.0.0.1:3001) to save the main model's usage - classifying or tagging many items, simple summaries, extracting fields into JSON, first drafts, repetitive rewrites, preliminary research notes. Use when the input is long or repetitive and the result is easy to check, and the content has no personal, client, credential or private data. Never use for code changes, architecture, critical analysis, decisions or final review.
---

# Delegating to free models (FreeLLMAPI)

The main model stays in charge. Free models do bulk grunt work; you check the result.

## When to delegate
Delegate only if ALL are true:
- The task is one of: classification/tagging, simple summary, field extraction to JSON, first draft, repetitive rewrite/translation, preliminary notes.
- The content is not confidential: no personal data (names with contact details, CPF, e-mail, phone, address), no client data, no credentials or keys, no private business files, no unpublished code.
- The result is easy to verify (a count, a JSON schema, a short text you will skim).
- Delegating actually saves work: the input is large or there are many items. For one short item, just do it yourself.

Do NOT delegate: programming, debugging, architecture, security, critical analysis, decisions, anything legal/medical/financial, and the final review of any deliverable.

If unsure whether the content is private, ask the user first.

## How
The helper refuses text that looks like it contains e-mails, CPF/CNPJ, phones, card numbers, passwords or API keys (exit code 3). That is a safety net, not permission: you still judge confidentiality yourself.

Pipe files straight in so you do not read the whole input into your own context:

```powershell
Get-Content -Raw "C:\caminho\itens.txt" | & "C:\Users\dspar\freellmapi\node\node.exe" "C:\Users\dspar\freellmapi\tools\ask-free.mjs" "Classifique cada linha em: elogio, reclamacao, duvida, pedido. Responda em JSON {linha: categoria}."
```

Short prompt without a file:

```powershell
& "C:\Users\dspar\freellmapi\node\node.exe" "C:\Users\dspar\freellmapi\tools\ask-free.mjs" --max-tokens 600 "Escreva 3 opcoes de titulo para um post sobre ajustes de roupa."
```

Options: `--model <id>` (default `auto`; tested good: `gpt-oss-120b`, `gpt-oss-20b`), `--system "..."`, `--max-tokens N`. The answer goes to stdout; a line on stderr shows which provider/model answered, latency and tokens.

If the server is down, start it: `powershell -File C:\Users\dspar\freellmapi\iniciar.ps1`. Exit codes: 3 blocked by privacy check, 5 server not running, 6 provider error or rate limit (then do the task yourself).

## Rules for the output
- Treat it as an untrusted draft: verify counts, JSON validity and facts before using it. Re-check anything surprising.
- Never present free-model output as final without your own review; mention to the user when part of the work was delegated.
- Limits (Groq free tier, observed): about 30 requests/min, 1000 requests/day, 8000 tokens/min for gpt-oss models. Batch items into one request instead of one request per item.
- Check usage with `& "C:\Users\dspar\freellmapi\node\node.exe" "C:\Users\dspar\freellmapi\tools\usage.mjs"`.
