# StatsAI — AI for Data Science & Statistics

A clean, bilingual (English / Arabic) static website for an AI-for-Data-Science learning program. In architecture, the codebase stays simple and easy to maintain.

Built with vanilla HTML, CSS, and a small JavaScript file. Deployed for free on **GitHub Pages**.

## Project structure (flat layout)

```
statsai/
├── index.html          # Home page
├── program.html        # How the program works
├── curriculum.html     # 10-module curriculum (3 phases)
├── team.html           # Instructors
├── documents.html      # Downloadable resources
├── faq.html            # Frequently asked questions
├── apply.html          # Application form & timeline
├── style.css           # Shared design system (one file)
├── site.js             # Bilingual toggle (one file)
├── README.md           # This file
└── docs/               # PDF/DOCX downloads (create when you have files)
```

**No `css/` or `js/` subfolders.** This is a flat layout — every link in HTML is just `style.css` or `site.js` with no path prefix. Simpler, fewer typos, less to break.

## How the bilingual system works

Every page sets `data-lang="en"` (or `"ar"`) on the `<body>`. Each piece of content has either `data-ar` or `data-en` as an attribute. CSS hides whichever language isn't active:

```css
body[data-lang="en"] [data-ar] { display: none; }
body[data-lang="ar"] [data-en] { display: none; }
```

The toggle button calls `toggleLang()` from `site.js`. The choice is saved in `localStorage` under the key `statsai-lang`, so it persists across pages.

## Local preview

```bash
# In the repo folder:
python3 -m http.server 8000
# Open http://localhost:8000 in your browser
```

Or use VS Code's "Live Server" extension and right-click `index.html` → "Open with Live Server".

## Deploy to GitHub Pages

1. Create a public GitHub repo named `statsai`.
2. Push or upload all files to the `main` branch.
3. **Settings → Pages → Source: Deploy from a branch → Branch: main → Folder: / (root) → Save**.
4. Wait ~60 seconds. Site is live at `https://YOUR-USERNAME.github.io/statsai/`.

## Customization

- **Colors**: edit the `:root { --indigo: ...; --teal: ...; --amber: ... }` block at the top of `style.css`.
- **Add a new instructor**: copy a `<div class="person">` block in `team.html`.
- **Add a module**: copy a `<div class="module">` block in `curriculum.html`.
- **Replace placeholder bios**: search for `[Instructor Name]` in `team.html`.
- **Replace placeholder books**: search for `[REPLACE]` in `curriculum.html`.

## Curriculum at a glance

10 modules across 3 phases:

**Phase A — Foundations (Data Science & Statistics)**
1. Programming Foundations for DS in Python & R
2. Data Wrangling & Exploratory Data Analysis
3. Applied Statistics & Inference
4. Classical Machine Learning

**Phase B — AI for the Practitioner**
5. LLM Foundations & Prompt Engineering
6. AI-Assisted Coding in Python & R
7. RAG & AI-Powered Literature Review
8. AI-Assisted Statistical Analysis

**Phase C — Advanced Applications & Capstone**
9. Reproducibility, Ethics & AI Limitations
10. Capstone — Apply to a Real Research Question

## License

Content © its authors. Code MIT.
