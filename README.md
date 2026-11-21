# KGB Cleaning & Support Services — Premium Homepage Concept

A custom, conversion-focused homepage redesign concept for **KGB Cleaning & Support Services Ltd** (https://kgbcleaning.co.uk/), built as a static, GitHub Pages–ready site.

> This repository contains a **design concept / demo**, not the live production website. The page is served with `noindex, nofollow` so it cannot compete with the real site in search results, and it is marked as a concept in the footer.

---

## 1. About the business

| | |
|---|---|
| **Business** | KGB Cleaning & Support Services Ltd |
| **Industry** | Commercial contract cleaning & soft services (B2B — private and public sector) |
| **Experience** | More than 30 years |
| **Head office** | Suite 331, Dorset House, Duke Street, Chelmsford, CM1 1TB |
| **Phone** | +44 (0) 1245 808653 |
| **Email** | enquiries@kgbcleaning.co.uk |
| **Coverage** | Cleaning and soft services delivered across the UK |
| **Services** | Contract Cleaning · Window Cleaning · Specialist Services · Consultancy Services · Green Cleaning |

All copy, contact details and claims are taken from the existing website. No business information was invented.

---

## 2. Brand system

### Colours — extracted from the original KGB brand mark

| Token | HEX | Usage |
|---|---|---|
| Primary brand red | `#E01920` | Buttons, accents, rules, key numerals |
| Red (dark / hover) | `#B31118` | Hover states |
| Red (accessible text) | `#BE1218` | Small red text on light backgrounds (AA) |
| Secondary brand slate | `#6E7690` | Secondary neutral drawn from the logo lettering |
| Ink | `#12161C` | Headlines, dark sections |
| Body text | `#3B4450` | Paragraphs |
| Paper | `#F7F6F3` | Page background |
| Line | `#E2E1DB` | Hairline rules |

The palette preserves the original identity: the red of the logo swoosh and the slate-grey of the wordmark, supported by warm off-white neutrals. No generic blue/purple scheme was introduced.

### Logo
The **original KGB logo** is used throughout (`assets/logo/kgb-logo.png`). It was recovered at the best available resolution, upscaled with Lanczos resampling, sharpened, trimmed and optimised — a quality refinement only. No part of the symbol, wordmark or colouring was redesigned, distorted or cropped.

### Typography
- **Headings:** Archivo (600/700) — industrial, confident, highly legible; suits a facilities/soft-services brand.
- **Body:** Inter (400/500/600) — neutral, screen-optimised, excellent at mobile sizes.
- Both are **self-hosted** variable fonts in `assets/fonts/` (no third-party font requests, no render-blocking CDN).

---

## 3. Design direction

An architectural, editorial take on corporate soft services rather than a generic "cleaning template":

- Asymmetric hero (copy + tall architectural frame) with a floating trust plate
- Hairline rules, numbered sections and generous negative space instead of rounded cards and gradients
- Sharp 2px corners, one accent colour used precisely
- Full-bleed image section for sectors, dark ink panels for the quote and final CTA
- Mobile-first CSS: base styles target 360px, progressively enhanced at 560 / 720 / 900 / 1100px

**Sections:** Utility bar · Sticky header · Hero · Credentials strip · Who we are · MD quote · Services (4) · Why KGB · Sectors · How it works · ESG · FAQs · Contact CTA · Footer

Genuine testimonials were **deliberately excluded**: the reviews on the existing site are leftover theme demo content ("Clany Eco", US service areas) and are not KGB's own customers.

---

## 4. Imagery

The live site's photographs could not be downloaded from this build environment (outbound access to the domain is blocked), so the imagery is **custom AI-generated, industry-specific conceptual photography** — clean commercial interiors, glazing, specialist machinery, EV fleet, education spaces.

These images are **illustrative only** and are not presented as real KGB projects, staff or customers. Where a company's own photography is available, drop the files into `assets/images/` using the same filenames to replace them.

All images are WebP, optimised, with intrinsic `width`/`height` and a lighter `-sm` variant for mobile via `<picture>`.

---

## 5. Project structure

```
.
├── index.html                  # Single-page homepage
├── css/
│   └── style.css               # Design system, tokens, responsive layout
├── js/
│   └── script.js               # Nav, sticky header, FAQ accordion, reveals
├── assets/
│   ├── fonts/                  # Self-hosted Archivo + Inter variable fonts
│   ├── images/                 # Optimised WebP imagery (+ mobile variants)
│   └── logo/                   # Original KGB logo + favicon
├── .nojekyll                   # Serve folders starting with _ as-is
└── README.md
```

No build step, no dependencies, no backend. Open `index.html` or serve the folder.

---

## 6. Features

- Sticky header with scroll state and mobile full-screen menu (Escape to close, scroll lock, closes on link tap)
- Accessible FAQ accordion (`aria-expanded` / `aria-controls` / `hidden`, one panel at a time, keyboard operable)
- Scroll-reveal animations that degrade gracefully without JS and respect `prefers-reduced-motion`
- Active-section highlighting in the navigation
- Semantic landmarks, single `h1`, logical heading order, skip link, visible focus styles, descriptive `alt` text
- SEO/social meta, `LocalBusiness` JSON-LD, `noindex` for the demo, favicon and theme colour
- Contact is via real `tel:` / `mailto:` links — there is no form, so no fake submission states

---

## 7. Running locally

```bash
python3 -m http.server 8000
# then open http://localhost:8000/
```

## 8. Deploying to GitHub Pages

1. Push this repository (or merge the branch) to `main`.
2. **Settings → Pages → Source:** Deploy from a branch → `main` / `/ (root)`.
3. The site publishes at `https://<username>.github.io/<repository>/`.

All asset paths are relative, so the site works correctly from a project subdirectory. `.nojekyll` prevents Jekyll processing.

---

## 9. QA performed

Verified in this build environment:

- HTML/CSS/JS parsed without errors; no duplicate IDs; every internal anchor resolves
- Every local asset referenced by HTML and CSS exists; all images have `alt` and intrinsic dimensions
- Mobile nav, FAQ accordion, reveal observer and footer year exercised in a DOM environment (jsdom) — all passed
- Colour contrast calculated for 10 key pairings (all ≥ 4.85:1 except decorative accents tuned to an AA-safe red for text)
- Responsive layout hand-reviewed at 360 / 390 / 430 / 768 / 1024 / 1280 / 1440px breakpoints

Not performed: pixel-level rendering in a real browser (no browser or required system libraries were available in this sandbox). Please review the live preview on your own device before going further.

---

*Concept design prepared as a design proposal. Original logo and brand colours remain the property of KGB Cleaning & Support Services Ltd.*
