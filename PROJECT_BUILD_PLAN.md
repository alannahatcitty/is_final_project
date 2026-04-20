# Web Development Final Project — Phased Build Plan

Use this document alongside **`PROJECT_ASSIGNMENT_RUBRIC.md`** (source of truth for requirements). Update checkboxes as you complete work.

**Hard deadline:** Apr 22 at 23:59 · **Points:** 100

---

## Phase 0 — Repository, structure, and hosting

**Goal:** A clean project layout and a working GitHub Pages URL before heavy content work.

- [ ] Create a GitHub repository for the site (or use an existing one).
- [ ] Decide folder layout (e.g. Bootstrap pages at root or in `/pages/`; keep paths predictable).
- [ ] Enable **GitHub Pages** (usually `main` branch, `/ (root)`).
- [ ] Confirm the live site loads over **https://** (not `file://`).
- [ ] Plan the **scratch page filename and path** (you will submit this full URL — e.g. `https://<user>.github.io/.../scratch.html`).

**Exit criteria:** Visiting the Pages URL shows *something* intentional (even a placeholder `index.html`).

---

## Phase 1 — Bootstrap “professional” site shell

**Goal:** One cohesive, readable Bootstrap-themed site that looks professional site-wide.

- [ ] Choose or finalize a Bootstrap theme/template; strip unused demo clutter as needed.
- [ ] Implement shared navigation across professional pages (consistent header/nav/footer).
- [ ] Set typography, spacing, and colors for **readability** (avoid harsh contrast, busy backgrounds, distracting animation per rubric).
- [ ] Add placeholder pages you know you need (e.g. home, resume) so links are not dead while you build.

**Exit criteria:** Professional pages feel unified; no obvious aesthetic/readability issues at default zoom.

---

## Phase 2 — Résumé in HTML (not PDF)

**Goal:** A useful, organized résumé meeting the assignment’s content expectations.

- [ ] Build résumé content in **HTML** (not embedded PDF/Word/Google Doc).
- [ ] Include strong sections where applicable: **education**, **work experience**, **skills**, optional **awards/honors**.
- [ ] Contact info optional — include only if you want.
- [ ] Résumé may live on Bootstrap professional page(s) and/or scratch page; ensure it is easy to scan.

**Exit criteria:** Résumé reads as complete and well structured for grading “completeness/organization,” not just qualifications.

---

## Phase 3 — From-scratch page (HTML only, no Bootstrap)

**Goal:** A separate page built from a **blank HTML file**, topic of your choice (hobby/passion/etc.).

- [ ] Create `scratch.html` (or chosen name) **without** Bootstrap components/classes from the theme.
- [ ] **Nested lists:** unordered inside ordered *or* ordered inside unordered.
- [ ] **≥1 image** not from the Bootstrap theme (local asset or reliable external URL).
- [ ] **Embedded YouTube video** (iframe); expect it to work when hosted, not necessarily from local files.
- [ ] **On-page anchor** (e.g. “jump to section” link + matching `id`).
- [ ] **Custom background** — solid color and/or background image.
- [ ] **≥3 `<div>` blocks** used to structure/position content.
- [ ] **Navigation back** to the professional-looking pages (link to `index.html` or your main entry).

**Exit criteria:** All scratch requirements exist on the hosted page; scratch does not reuse Bootstrap template markup.

---

## Phase 4 — Custom stylesheet (from scratch) and wiring

**Goal:** A **linked** CSS file you wrote, applied to the scratch page.

- [ ] Create a new `.css` file (e.g. `scratch-styles.css`).
- [ ] Link it from the scratch page with `<link rel="stylesheet" ...>`.
- [ ] **≥4 style rules** (you will likely have more).
- [ ] Include rules for **font color** and **font family**.
- [ ] Include positioning/layout for **divs** (e.g. margins, max-width, flex/grid, padding — whatever matches your layout).
- [ ] Verify in the browser that styles **actually apply** (not a broken path).

**Exit criteria:** Hosted scratch page visibly uses your stylesheet; rubric CSS checklist items are satisfied.

---

## Phase 5 — Live Tableau embed

**Goal:** **Interactive** Tableau visualization embedded on the scratch page (not a static screenshot).

- [ ] Find or create a Tableau Public viz with embed/share allowed.
- [ ] Use Tableau’s embed code (iframe) so users can filter/interact on the hosted site.
- [ ] Confirm interactivity works on the **online** site (sometimes blocked by mixed content or bad embed URL).

**Exit criteria:** Tableau behaves as a live embed on GitHub Pages, not just an image.

---

## Phase 6 — AI collaboration web app (single page)

**Goal:** A small creative app, **ideally one HTML file** (HTML + CSS + JS together).

- [ ] Implement the app (games, tools, simulators, etc. — see rubric examples).
- [ ] Iterate with AI, then **edit** so the result reflects your contribution (required for full credit on simpler ideas).
- [ ] Host the app page in the repo; link it from the **scratch page** so graders can find it.
- [ ] Scratch page must also link to **`index.html`** (and other pages if needed) per submission instructions.

**Exit criteria:** One reachable app page; clear link path: scratch → app; single-file structure unless you have a strong reason.

---

## Phase 7 — (Graduate students only) Extra expertise page

**Skip this phase if you are not a graduate student.**

- [ ] Add **one additional page** focused on your field (marketing, accounting, strategy, etc.).
- [ ] Cover **projected career path**, **experience to date** (e.g. internships), **anticipated contributions** to the field/world.
- [ ] Add relevant **media** (images/video) and graphs if appropriate.
- [ ] May be Bootstrap-themed or from scratch.
- [ ] Put a link to this page **on the scratch page** (assignment requirement for graduate students).

**Exit criteria:** Extra page exists, is on-theme, and is linked from scratch.

---

## Phase 8 — Integration, link audit, and polish

**Goal:** Nothing broken; everything gradable from the **hosted** site.

- [ ] Click **every** link: internal nav, anchors, external sites, image/icon links, social icons (if present).
- [ ] Verify **all images** (including CSS background images) and **all videos** load and play where intended.
- [ ] Remove or fix placeholder text; align branding (titles, meta, favicon optional).
- [ ] Test on **another device or browser** (assignment explicitly suggests this for the scratch URL).
- [ ] Double-check: **no** `file:///...` URLs in submissions; public URL starts with **https://**.

**Exit criteria:** Honest answers possible for the self-review prompts (aesthetics, links, media, résumé, Tableau, web app quality).

---

## Phase 9 — Submission checklist

- [ ] Submit the **full HTTPS URL to the from-scratch page** (copy from the browser address bar on GitHub Pages).
- [ ] Confirm scratch page links to **`index.html`**, **web app**, and **other pages** as needed for verification.
- [ ] Complete hosting question and self-assessment honestly (hosted vs local grading rules apply).

---

## Quick reference — rubric file

All detailed wording, examples, and quiz-style questions live in **`PROJECT_ASSIGNMENT_RUBRIC.md`**.
