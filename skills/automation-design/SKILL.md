---
name: automation-design
description: Design an automation before building it - scripts, scheduled jobs, bots, scrapers, integrations between apps, n8n/Zapier/Make flows, GitHub Actions, Python or Node workers. Use when the user wants to automate a manual process, "make this run by itself", connect two systems, schedule a task, or when an existing automation keeps breaking. Produces a short design (trigger, steps, data, failure handling, safety) and then a tested implementation.
---

# Automation design

Build the smallest automation that reliably does the job, and make its failures visible and safe.

## 1. Map the manual process first
Write down, in order: what starts it, each step a person does today, inputs and outputs, how often it happens, how long it takes, and what "done right" looks like. Find the step that costs the most time or causes the most errors; automate that first if the whole process is large.

## 2. Decide whether and how to automate
- Weigh frequency times time saved against build and maintenance cost. If it runs rarely and is fragile, a checklist or a one-click script may be better.
- Pick the simplest runner that fits: a local script, Windows Task Scheduler or cron, a GitHub Action, a hosted no-code flow, or a small server. Prefer what the user already has.
- Prefer official APIs over scraping. If scraping, respect the site's terms and robots.txt, and rate-limit.

## 3. Write the design (short)
- **Trigger**: schedule, event, webhook or manual.
- **Steps**: numbered, each as input -> action -> output.
- **Data**: where it is read from and written to, its format, and what is personal or secret.
- **Idempotency**: running twice must not duplicate or corrupt anything (IDs, upserts, "already processed" markers).
- **Failures**: retries with backoff for network errors, one clear log line per run, and an alert or visible status when it fails. Never fail silently.
- **Safety**: secrets in environment variables or a secret store, never in code or logs; least-privilege tokens; a dry-run mode; a human approval step before anything irreversible or outward-facing (sending messages, payments, deleting, publishing, posting on the user's accounts).
- **Limits**: API quotas, rate limits, cost per run.

Show the design to the user and get a yes before building anything that touches accounts, money or other people.

## 4. Build and test
- Start with a dry run on sample data, then one real run, then schedule it.
- Add a test for the core transformation and one for the "already processed" path.
- Log the start, items processed, items skipped, errors and the end of each run.

## 5. Hand over
Document in the README what it does, how to run it, how to stop or disable it, where the logs are, which secrets it needs, and how to undo its effects.
