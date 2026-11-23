---
name: visual-quality-review
description: Review the visual quality of a finished or in-progress design - web pages, app screens, slides, social media posts and carousels, flyers, logos, documents and images - and give prioritised, concrete fixes. Use when the user asks "does this look good", "review this design", "what's wrong with this layout", before publishing or delivering visual work, or after building a UI to check it in the browser. Reviews the real rendered output (screenshot or browser), not just the code.
---

# Visual quality review

Judge what the viewer actually sees, then give the few changes that matter most.

## 1. Look at the real output
Get a rendering: open the page in a browser at desktop width and at about 375px, take screenshots, render slides or images to PNG, or ask the user for one. Do not review from source code alone. Note the context: audience, brand, and where it will be seen (phone feed, projector, print).

## 2. Check, in this order
1. **Purpose and hierarchy**: within 3 seconds, is it clear what this is and what to do next? One clear focal point per screen, slide or post.
2. **Readability**: text size (body at least 16px on the web, legible on a phone for social posts), line length, contrast (WCAG AA: 4.5:1 for body text, 3:1 for large text), no text over busy images without a backdrop.
3. **Layout and spacing**: alignment to a grid, a consistent spacing scale, enough white space, nothing cramped against the edges, equal margins.
4. **Typography**: at most two families, consistent sizes and weights, no single orphaned word in headlines, correct accents and punctuation.
5. **Color**: a limited palette consistent with the brand; color is never the only carrier of meaning.
6. **Images and icons**: sharp (no upscaling or compression artifacts), one consistent style, cropped with intent, no distorted aspect ratios, no watermarks or AI glitches (hands, garbled text inside images).
7. **Consistency**: buttons, cards and headings look the same everywhere; posts in a series share one system.
8. **Responsiveness and states** (UI only): no horizontal scroll on mobile, tap targets of at least 44px, hover, focus, empty and error states exist.
9. **Copy on the design**: typos, tone, too much text.

## 3. Report
- A one-line overall verdict.
- **Must fix** (breaks readability, accessibility or the main goal), **Should fix**, **Nice to have**. Each item: where it is, what is wrong, and the concrete fix with values (size, hex color, spacing).
- At most about 10 items; merge small ones.
- If you can edit the source, offer to apply the must-fix items and check again with a new screenshot.

Write in the user's language.
