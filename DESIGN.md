# Hopefield Wind Farm Local Community Company — Design System

> **Status: the HWFLCC design standard.** Written 29 October 2026 from the new HWFLCC website (repo `innatestudios147/hwflcc-website`, commit `778d7b1`). Use it for all HWFLCC design: web pages, social posts, flyers, documents and slides. Where older material (the WordPress site at hwflcc.co.za, the Lovable concept) disagrees with this file, this file wins.
>
> **Purpose.** Hand this file to a designer, developer or AI tool and the output should match the brand.
>
> **Derived from:** the new website's tokens and components (`public/assets/css/site.css`), the HWFLCC logo and brand colours from hwflcc.co.za, the layout and type of the *Green Horizon* concept (hwflcc-green-horizon.lovable.app), and the content of the old site and the *Application for Funding* PDF.
>
> **Version:** 1.0 (29 October 2026)

---

## 1. Brand at a glance

| | |
|---|---|
| **Full name** | Hopefield Wind Farm Local Community Company |
| **Short name** | HWFLCC (use after the full name has appeared once) |
| **Legal descriptor** | Association incorporated under Section 21 |
| **What it does** | Non-profit company that turns the benefit of the Umoya Energy – Hopefield Wind Farm into socio-economic development for previously disadvantaged communities within 50 km of the wind farm |
| **Hero line** | *Harvesting the wind, growing our community.* |
| **Personality** | Grounded, hopeful, accountable, local. A community trust, not a corporate energy brand. |
| **Visual idea** | Clear West Coast sky (blue) over fynbos hills (green), lit by spring growth (lime). Editorial serif headlines over a clean geometric sans, with real landscape photography and a slowly turning wind turbine as the signature motif. |
| **Address** | 26 Voortrekker Road, Hopefield, 7355, Western Cape (still to be reconfirmed, see §15) |
| **Website** | hwflcc.co.za (new site in progress at hwflcc.netlify.app) |

---

## 2. Logo

- **The logo:** a hand-drawn open hand with a black outline. The fingers are sky blue with a small yellow sun, and the palm is green hills with a white wind turbine. Beside it sits the two-line wordmark: **HOPEFIELD WIND FARM** in light blue capitals over **LOCAL COMMUNITY COMPANY** in bold green capitals.
- **Files:** `public/assets/img/logo.png` (825 × 190 px, transparent PNG) in the website repo. The hand-only mark is in the favicon files (`favicon-32x32.png`, `favicon-192x192.png`, `apple-touch-icon.png`). No vector (SVG/EPS/AI) or reversed version exists yet (§15).
- **Size:** 48 px tall in the web header (38 px at ≤480 px), 56 px in the footer. Don't use the full lock-up below 32 px tall; below that the wordmark can't be read. Use the hand-only mark instead.
- **Background:** white or `#F4F4F4` only. The hand's black outline vanishes on dark grounds and the blue wordmark loses contrast. On a photo or a blue background, put the logo on a white plate (radius 16 px, 12–16 px padding) or in a white bar.
- **Clear space:** keep at least half the logo's height clear on every side.
- **Never** recolour, redraw, outline, stretch, rotate or add effects to it. Never set the wordmark in another font. Never use the wordmark without the hand. The hand without the wordmark is allowed for icons, avatars and favicons.

---

## 3. Colour

### 3.1 Brand colours (from the logo and hwflcc.co.za)

| Token | Value | Name | Use |
|---|---|---|---|
| `--brand-blue` | `#1893CF` | Sky blue | Big numbers (≥40 px), the 80% bar, dots, the logo's wordmark. **Not for small text.** |
| `--brand-green` | `#16A755` | Fynbos green | The 20% bar, list dots, nav underline. **Not for small text.** |
| `--brand-lime` | `#88C549` | Spring lime | Main button on dark grounds, icons on deep blue, step numbers, selection. **Never as text on light.** |

### 3.2 Role colours

The brand blue and green fail contrast as small text on white (§14). Use these darker shades wherever colour carries text.

| Token | Value | Use |
|---|---|---|
| `--bg` | `#FFFFFF` | Page background, cards |
| `--fg` | `#393939` | Body text and headings on light (the old site's text colour) |
| `--ink` | `#14171C` | Text on lime; home hero base; lightbox backdrop |
| `--surface` | `#F4F4F4` | Footer, menu button |
| `--primary` | `#11709F` | Blue for text: links, eyebrows, small labels, outline buttons, focus ring on light |
| `--primary-deep` | `#0C5480` | Deep blue: page heroes, feature bands, the 80% figure block |
| `--green-strong` | `#0F7A3D` | Green buttons, tick icons, the 20% figure block |
| `--green-deeper` | `#0B6532` | Green button hover |
| `--secondary` | `#E9F4FA` | Light blue tint: tinted bands, stat tiles, contact cards, checklist chips |
| `--secondary-fg` | `#2C3A44` | Text on the tint |
| `--muted-fg` | `#63666A` | Secondary text, ledes, prose, notes |
| `--accent-light` | `#A8D672` | Lime for **text** on deep blue: italic headline accents, eyebrows on dark, links on dark, focus ring on dark |
| `--line` | `#E2E6EA` | Hairlines, card borders, inputs |
| `--hero-overlay` | `linear-gradient(to top, rgb(20 23 28 / .85), rgb(20 23 28 / .12) 60%, rgb(20 23 28 / .3))` | Over the home hero photo |
| Page-hero wash | `linear-gradient(100deg, rgb(12 84 128 / .96) 30%, rgb(12 84 128 / .8))` over the hero photo | Inner page heroes |

On dark grounds, white is used at fixed opacities: 100% headings, 90% ledes, 82% card body, 40% ghost-button border, 30% hero-pill border, 15–18% card borders and rules, 6–10% hover washes.

### 3.3 Colour rules

- **Blue is the ground, green is the action, lime is the light.** Deep blue carries heroes and one feature band per page. Green is the main button on light. Lime is the main button and the accent on dark.
- Light sections alternate **white → light-blue tint `#E9F4FA` → white**, with **one deep-blue band** per page besides the hero.
- The italic accent phrase in a hero headline is lime `#A8D672`. Headings on light backgrounds stay `#393939` with no coloured words.
- The 80/20 funding split is always **blue for 80%** (long-term) and **green for 20%** (smaller projects).
- Don't introduce other hues (no gold, orange or red). The sun in the logo is the only yellow.
- The site is light-only by design; there is no dark theme.

---

## 4. Typography

### 4.1 Families

| Role | Font | Weights | Fallback stack |
|---|---|---|---|
| Headings, display numbers, card titles, step numerals | **Fraunces** (optical sizing on) | 400, italic 400 (600 loaded, unused) | Georgia, "Times New Roman", serif |
| Body, UI, labels, buttons, nav | **Outfit** | 300, 400, 500, 600 | system-ui, -apple-system, "Segoe UI", sans-serif |

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;1,9..144,400&family=Outfit:wght@300;400;500;600&display=swap">
```

In Word or PowerPoint without the fonts installed, use **Georgia** for Fraunces and **Calibri** for Outfit. The old WordPress site used Playfair Display and Source Sans Pro; those are retired.

### 4.2 Base

`body { font: 400 1rem/1.6 Outfit; color: #393939; background: #fff; -webkit-font-smoothing: antialiased }` · `::selection { background: #88C549; color: #14171C }` · headings `text-wrap: balance`, paragraphs `text-wrap: pretty`.

### 4.3 Type scale

| Style | Font | Size | Weight | Line height | Other |
|---|---|---|---|---|---|
| **Display XL** (h1, heroes) | Fraunces | `clamp(2.75rem, 7vw, 4.5rem)` · 44–72 px | 400 | 1.05 | −0.01em; italic accent phrase in `#A8D672` |
| **Display LG** (section h2) | Fraunces | `clamp(2.125rem, 4.4vw, 3rem)` · 34–48 px | 400 | 1.1 | `#393939` on light, white on dark |
| **Display MD** | Fraunces | `clamp(1.875rem, 3.4vw, 2.5rem)` · 30–40 px | 400 | 1.15 | CTA blocks, sub-sections |
| **Display SM** | Fraunces | `clamp(1.5rem, 2.4vw, 1.75rem)` · 24–28 px | 400 | 1.2 | Form and info-card titles |
| Area title | Fraunces | 30 px | 400 | — | Strategy focus areas |
| Card title | Fraunces | 22–24 px | 400 | 1.25 | Focus, step, send cards |
| Figure number | Fraunces | `clamp(3rem, 7vw, 4.5rem)` · 48–72 px | 400 | 1 | 80% / 20% blocks; tabular figures |
| Stat number | Fraunces | `clamp(2.5rem, 5vw, 3rem)` · 40–48 px | 400 | 1 | Brand blue `#1893CF`; tabular figures |
| Legend number | Fraunces | 36 px | 400 | 1 | Funding split card |
| **Eyebrow** | Outfit | 14 px | 500 | — | UPPERCASE, 0.2em tracking; `#11709F` on light, `#A8D672` on dark |
| **Small label** | Outfit | 13 px | 600 | — | UPPERCASE, 0.15em; `#11709F` (card, list, footer and contact headings) |
| Hero pill | Outfit | 12 px | 400 | — | UPPERCASE, 0.2em, white |
| **Lede** | Outfit | 18 px | 400 | 1.6 | `#63666A` on light; white 90% on dark; max 40 rem |
| Prose | Outfit | 17 px | 400 | 1.75 | `#63666A`; `<strong>` is 500 in `#393939` |
| Body | Outfit | 16 px | 400 | 1.6 | `#393939` |
| Card body | Outfit | 15 px | 400 | 1.6 | |
| Nav link | Outfit | 15 px | 500 | — | Sentence case |
| Button | Outfit | 16 px | 500 | 1.2 | Sentence case |
| Note / form note | Outfit | 14 px | 400 | — | `#63666A` |

### 4.4 Type rules

- **Serif for headings and numbers, sans for reading and clicking.** Fraunces stays at 400; it is never bolded.
- **Hero headlines have two parts, and the second is italic:** *Harvesting the wind, **growing our community.*** · *Investing for the **long term.*** · *Apply for **funding.*** The italic part is lime only on dark grounds.
- Sentence case everywhere: headings, buttons, nav. Only eyebrows, small labels and the hero pill are uppercase and tracked.
- Figures use `font-variant-numeric: lining-nums tabular-nums`.
- Keep running text to about 65 characters (ledes max 40 rem, prose about 46 rem).

---

## 5. Layout and spacing

### 5.1 Container and rhythm

| Token | Value |
|---|---|
| `--container` | 80 rem (1280 px), centred |
| `--gutter` | 24 px side padding (16 px at ≤380 px) |
| `--section` | 112 px top and bottom (72 px at ≤767 px) |
| `--header-h` | 80 px |
| Home hero | `min-height: calc(92svh - 80px)`, content anchored to the bottom, 80 px bottom padding |
| Page hero | 88 px top, 80 px bottom; full-height variant `calc(80svh - 80px)` for thank-you and 404 |

### 5.2 Grids

| Pattern | Columns | Gap (row / column) | Breakpoints |
|---|---|---|---|
| Two-column split (heading + text) | 1fr 1.25fr | 40 / 64 px | 1 column below 768 |
| About (heading + text, stats below) | 1fr 1fr | 40 / 64 px | stats go 3-up from 768 |
| Funding teaser (text + split card) | 1.25fr 0.9fr | 48 / 64 px | from 900 |
| Contact (form + aside) | 1.35fr 1fr | 40 px | from 900 |
| Focus cards | 1 → 2 → 4 | 24 px | 2-up from 640, 4-up from 1024 |
| Stats | 1 → 3 | 16 px | from 768 |
| Steps | 1 → 3 | 20 px | from 900 |
| Info cards / send cards | 1 → 2 | 20 / 16 px | from 900 / 640 |
| Photo mosaic / gallery | 2 → 4 | 16 px | 4-up from 768; every second photo drops 48 px |
| Footer | 1 → 2 → 4 (1.6fr 1fr 1.2fr 0.8fr) | 40 px | from 640 / 1024 |

### 5.3 Spacing values in use

`4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 56 · 64 · 80 · 88 · 112` px. Card padding is 32 px (24 px on contact cards, 28 px on send cards; 24–40 px fluid on the form card).

### 5.4 Breakpoints

380 (gutter shrinks) · 480 (logo shrinks) · 640 (small grids go 2-up) · 768 (splits, stats and photos go wide; turbine shows) · 900 (nav collapses below this; 3-up steps) · 1024 (4-up focus cards, 4-column footer).

---

## 6. Shape, elevation and borders

### 6.1 Radius

| Value | Use |
|---|---|
| 12 px | Inputs, mobile menu items |
| 14 px | Checklist chips |
| 16 px | Lightbox photo, logo plate |
| 20 px | Mobile menu panel |
| **24 px** | **Cards and photo frames (default)** |
| 999 px | Buttons, hero pill, icon circles, step numbers, split bar |

### 6.2 Elevation

The system is almost flat. Cards separate by tint or a 1 px `#E2E6EA` border, not by shadow. There are three shadows:

```css
--shadow-header: 0 8px 24px -16px rgb(20 23 28 / .35);  /* header once the page scrolls */
--shadow-card:   0 20px 40px -24px rgb(20 23 28 / .2);  /* the funding split card only */
--shadow-menu:   0 24px 48px -16px rgb(20 23 28 / .35); /* mobile menu panel */
```

### 6.3 Borders

- Light: 1 px `#E2E6EA` (cards, header, inputs, area dividers).
- Dark: 1 px white at 15–18% (focus cards, send cards, ban-list rules).
- Footer base row: 1 px `#11709F` at 15%.

---

## 7. Components

### 7.1 Header

Sticky, white, 1 px `#E2E6EA` bottom border; gains `--shadow-header` after 8 px of scroll. Logo left (48 px). Nav right: 15 px/500, 28 px gaps. **Items:** About · Our strategy · Apply for funding · Gallery · Contact. The current page is `#11709F` with a 2 px green underline, which draws in from the left on hover (250 ms). Below 900 px: a 44 px round menu button (`#F4F4F4`, 1 px line) opens a white panel (radius 20, `--shadow-menu`) that scales in from the top right in 200 ms. Escape and an outside click close it.

### 7.2 Home hero

Layers: ink base → full-bleed photo (slow zoom 1.1 → 1 over 24 s) → `--hero-overlay` → content, bottom-left:
1. **Pill:** wind icon + "Association incorporated under Section 21"; 1 px white 30% border, 8 px backdrop blur.
2. **Headline:** Display XL, two lines, second line italic lime.
3. **Lede:** one sentence, 18 px white 90%, max 36 rem.
4. **Buttons:** lime main action ("Our impact") + ghost secondary ("Apply for funding").

### 7.3 Page hero (inner pages)

Deep-blue wash over the hero photo; eyebrow (lime) → Display XL with italic lime phrase → lede → optional buttons. A line-drawn **wind turbine** (white, 16% opacity, 192–304 px wide) stands at the top right with its rotor turning once every 18 s. It is hidden below 768 px.

### 7.4 Section header

Eyebrow → Display LG → optional lede. Where a section links onward, the heading block and a trailing **arrow link** ("See the gallery →") sit in one row, aligned to the baseline.

### 7.5 Buttons

```css
.btn { display: inline-flex; align-items: center; gap: 8px; min-height: 46px; padding: 12px 28px;
       border-radius: 999px; border: 1px solid transparent; font: 500 16px/1.2 Outfit; text-decoration: none;
       transition: background-color 200ms ease, border-color 200ms ease, color 200ms ease, transform 160ms var(--ease-out); }
.btn:active { transform: scale(0.97); }
.btn-accent  { background: #88C549; color: #14171C; }            /* main action on dark;  hover #9BD162 */
.btn-ghost   { color: #fff; border-color: rgb(255 255 255 / .4); } /* secondary on dark;    hover white 10% fill */
.btn-primary { background: #0F7A3D; color: #fff; }               /* main action on light; hover #0B6532 */
.btn-outline { color: #11709F; border-color: rgb(17 112 159 / .3); } /* secondary on light; hover #E9F4FA fill */
```

- One main action per group, followed by at most one secondary.
- Labels are short, verb-first, sentence case: *Apply for funding, Download the application form, Read our strategy, How to apply, Send message, Get in touch, Back to home.*
- A trailing **arrow** marks "go somewhere"; a leading **download** icon marks the PDF.
- **Arrow link:** 500 weight, `#11709F` (`#A8D672` on dark), trailing arrow, no underline.

### 7.6 Cards

| Card | Spec |
|---|---|
| **Stat tile** | `#E9F4FA`, r24, padding 32. Stat number (Fraunces 40–48 px, brand blue) over a 14 px muted label. Three across. Figures count up on first view. |
| **Focus card** (on deep blue) | 1 px white 15% border, r24, padding 32. 32 px lime icon → Fraunces 24 px title → 15 px white 82% text. Hover: lifts 4 px, white 6% fill, lime 45% border. |
| **Funding split card** | White, 1 px line, r24, padding 32, `--shadow-card`. Small label "Our funding principle" → 14 px split bar (80% blue + 20% green pills, 4 px gap) → legend (Fraunces 36 px figures with coloured dots, 15 px muted captions) → note under a rule: "Of the Local Company's budget each year." |
| **Figure block pair** | 4fr : 2.4fr. 80% on deep blue, 20% on green-strong; white Fraunces 48–72 px figure with a 15 px label; min-height 208 px. |
| **Step card** | White, 1 px line, r24, padding 32. 44 px lime circle with a Fraunces numeral → Fraunces 22 px title → muted body. **Only for real sequences.** |
| **Info card** | White on the tint band, r24, padding 32; list; closing note under a rule. |
| **Send card** (on deep blue) | 1 px white 18% border, r24, padding 28. 28 px lime icon → Fraunces 22 px title → white 90% text; links `#A8D672`. |
| **Contact card** | `#E9F4FA`, r24, padding 24. 24 px blue icon beside a small-label title, `#2C3A44` text, optional arrow link. |

### 7.7 Lists

| List | Spec |
|---|---|
| **Tick list** | Green-strong check icon, 12 px gap. For what *is* supported or eligible. |
| **Dot list** | 6 px green dot, muted text. For objectives and criteria. |
| **Ban list** (on deep blue) | Lime-light "no" icon, rows divided by white 15% rules. For exclusions. |
| **Checklist chips** | `#E9F4FA` chips, r14, padding 12 × 16, blue file icon, qualifier in 14 px muted ("(schools and ECD centres)"). For documents to attach. |
| **Clause list** | Italic Fraunces letter (*a*, *b*) in a 32 px tint circle. Only for quoting lettered legal clauses. |

### 7.8 Strategy area row

A full-width row between 1 px rules. Left (272 px): 52 px tint circle with a blue icon + Fraunces 30 px area name. Right, in two columns (1.5fr : 1fr): "Key projects (0–5 years)" as a tick list, "Objectives" as a dot list. Each heading is a small label.

### 7.9 Contact form

White card, 1 px line, r24, 24–40 px padding, 20 px gaps. Fields: 15 px/500 labels ("Phone *(optional)*" with the qualifier muted); inputs white, 1 px line, r12, 12 × 16 px padding; focus = `#11709F` border + 3 px ring at 18%. Fields: Name, Email, Phone, Organisation, "What is it about?" (General enquiry · Funding application · Community project · Media), Message. A privacy note sits above the green "Send message" button. Netlify Forms with a honeypot; success goes to a thank-you page.

### 7.10 Photos and lightbox

Photos sit in r24 frames with `object-fit: cover`: the home mosaic at 288 px tall (208 px on phones), the gallery at 2:3. Every second photo drops 48 px from 768 px up. Gallery photos open in a native `<dialog>`: ink 90% backdrop, photo at r16 up to 86 vh, round close button above right. Escape closes it.

### 7.11 Closing CTA block

Centred, max 736 px: Display MD question ("Does your project fit our strategy?", "Not sure your project qualifies?") → lede → main + secondary button.

### 7.12 Footer

`#F4F4F4`, four columns: (1) logo 56 px + "Turning clean, renewable energy into lasting benefit for the people of Hopefield. Association incorporated under Section 21." (2) **Visit or write to us**: the address. (3) **Funding applications**: one line pointing to the Apply page and contact form + "Application form (PDF)" link. (4) **Explore**: Our strategy · Apply for funding · Gallery · Contact us. Base row: "Hopefield · Saldanha Bay · Western Cape · © YEAR" and "Privacy policy".

---

## 8. Iconography

- **Style:** line icons on a 24 px grid, 1.6 px stroke, round caps and joins, `currentColor`, no fills (Lucide-style). Inline at 1.125 em; 24–32 px in cards; 52 px inside a tint circle on the strategy page.
- **Focus areas:** Social Welfare → people · Development → sprout · Health → heart with a pulse line · Education → graduation cap.
- **UI:** arrow-right, download, mail, map pin, check, "no" (circle with slash), file, menu, close, wind.
- **Signature motif:** the line-drawn wind turbine (tower + three-blade rotor), white at 16% on deep blue. Use one per view, never behind body text.
- No emoji anywhere.

---

## 9. Photography and imagery

- **What exists:** four portrait photos (600 × 900) of the Hopefield turbines over flowering West Coast fynbos (yellow, white and pink blooms), and a landscape hero of turbines over fynbos hills at sunset taken from the Green Horizon concept.
- **What's wanted:** HWFLCC's own photos of the people and projects it funds: schools, ECD centres, clinics, small businesses, sport and culture. Get written consent from the people shown, and from a parent or guardian for children (POPIA).
- **Treatment:** home hero full-bleed under `--hero-overlay`; inner heroes under the deep-blue wash; content photos in r24 frames. Never use a photo full-strength behind text without an overlay.
- **Alt text** describes what is in the picture. Landscapes are not "community projects": write "Pink fynbos in bloom beneath the wind farm", not "Community project".
- No stock photos of people, no pity framing, no AI-generated people.

---

## 10. Motion

### 10.1 Tokens

```css
--ease-out:    cubic-bezier(0.23, 1, 0.32, 1);   /* entrances, UI feedback */
--ease-in-out: cubic-bezier(0.77, 0, 0.175, 1);  /* reveals that travel across the screen */
--stagger:     70ms;                              /* between siblings in a group */
```

### 10.2 What moves

| Element | Motion | Timing |
|---|---|---|
| Home hero headline | Each line rises out of a mask | 1000 ms ease-out, at 200 / 320 ms |
| Home hero pill, lede, buttons | Fade + rise 24 px | 900 ms ease-out, at 100 / 520 / 640 ms |
| Home hero photo | Slow zoom 1.1 → 1; drifts down 16% over the first screen of scroll (where supported) | 24 s ease-out; scroll-linked |
| Page hero content | Fade + rise 24 px, staggered | 800 ms ease-out, 80 ms steps |
| Hero turbine | Fades in; rotor turns | 1400 ms; 18 s per turn, linear |
| Scroll reveal | Fade + rise 24 px, once, staggered across grid children | 800 ms ease-out, 70 ms steps; fires at 12% visible |
| Photo reveal | Curtain wipes top → bottom while the photo settles 1.12 → 1 | 1000 ms ease-in-out / 1400 ms ease-out |
| Big figures (176 600 MWh, 80%, 20%) | Count up from 0 on first view | 1800 ms for figures above 1 000, otherwise 1200 ms; ease-out curve |
| Funding split bar | Blue then green segment draws in | 1100 ms ease-in-out, at 300 / 650 ms |
| Button press | Scale 0.97 | 160 ms ease-out |
| Hover (mouse and trackpad only) | Arrow nudges 4 px right; download dips 2 px; focus card lifts 4 px; gallery photo scales 1.04; nav underline draws in | 200–500 ms ease-out |
| Mobile menu | Fade + scale 0.98 + rise 8 px from top right | 200 ms ease-out |
| Lightbox | Fade + scale 0.96 → 1, backdrop with it | 250 ms ease-out |
| Page change | Crossfade; header stays put (view transitions) | out 160 ms / in 320 ms |

### 10.3 Motion rules

- Never `ease-in`, never `transition: all`, never scale from 0. Animate `transform`, `opacity` and `clip-path` only.
- UI feedback stays under 300 ms. Reveals fire once and never re-run on scroll back.
- Hover motion only under `@media (hover: hover) and (pointer: fine)`.
- **Reduced motion:** fades only (500 ms). No rises, zoom, drift, curtains, turbine spin, count-ups or page crossfade.
- Content is never hidden without JavaScript: reveal styles apply only under `html.js`.
- Count-ups are visual only; screen readers get the final figure.

---

## 11. Page recipes

**Home:** header → hero → about the wind farm (two-column + three stat tiles) → "Where the energy goes" (deep-blue band, four focus cards, "Read our strategy →") → funding teaser (text + split card) → "Where wind meets fynbos" photo mosaic → footer.

**Inner page:** header → page hero (eyebrow · two-part headline · lede · optional buttons · turbine) → content sections alternating white and tint → **one** deep-blue band → centred closing CTA → footer.

| Page | Path | Deep-blue band |
|---|---|---|
| Our strategy | `/our-strategy/` | "What we will not fund" (ban list) |
| Apply for funding | `/apply/` | "Submit your application" (send cards) |
| Gallery | `/gallery/` | none (tint CTA band) |
| Contact | `/contact-us/` | none |
| Privacy policy | `/privacy-policy/` | none |

---

## 12. Writing and content

### 12.1 Voice

Plain, warm and factual. Write for a school principal, an ECD centre owner or a small-business owner in Hopefield, not for an energy investor. Short sentences, active voice, "we" for HWFLCC and "you" for the reader. Keep formal language for where it is legally needed (the company's objects and the 85% rule) and quote that wording exactly.

### 12.2 Style

- South African English: *organisation, programme, centre, favour, licence (noun)*.
- Figures: a space as the thousands separator (*176 600*) and a non-breaking space before units (*125 km*, *176 600 MWh*). `R` for rand (*R25 000*). Dates as *1 February 2014*.
- The wind farm is **Umoya Energy – Hopefield Wind Farm** (en dash). HWFLCC is the company that receives its community benefit; don't call HWFLCC "the wind farm".
- Use the full name on first mention and in page titles, then "HWFLCC".

### 12.3 Approved facts

Use these as written. Never invent figures, amounts, dates, beneficiaries or quotes; use placeholders like `[AMOUNT]` or `[DATE]` and say so.

- Located 125 km north of Cape Town on the R45 in the Saldanha Bay Municipality, Western Cape.
- Generates approximately 176 600 MWh of clean renewable energy every year.
- Began supplying the grid in late 2013; reached commercial operation on 1 February 2014, just over a year after construction started. It was the first commercial wind farm in the country to reach this milestone.
- **Objects:** non-profit socio-economic development for previously disadvantaged communities within a 50 km radius of the wind farm; at least 85% of any expenditure must benefit individuals classified as African, Indian or Coloured South African citizens (quote the full clause on the strategy page); all activities based in South Africa.
- **Funding principle:** 80% of the budget each year to long-term sustainable projects, 20% to smaller projects.
- **Focus areas:** Social Welfare, Development, Health, Education.
- **Who can apply:** registered NGOs, schools, ECD centres, local individuals and other organisations providing community upliftment services in the Saldanha Bay Local Municipality.
- **Not funded:** political parties; trade unions; individual attendance of conferences and trips; activities that infringe the Bill of Rights or South African law; activities aimed at a particular religious group's objectives; private companies and close corporations; expenses already incurred.

### 12.4 Contacts

**Laverne Louw no longer works at HWFLCC.** Never publish her name or her email address. Until a new address is confirmed, send people to the website's contact form and give the postal address.

---

## 13. Other formats (provisional)

Only the website exists in this system so far. These rules extend it to other formats; confirm them the first time each format is made, then remove the "provisional" note.

- **Social posts** (1080 × 1080 or 1080 × 1350): deep-blue `#0C5480` background, or a landscape photo under the ink overlay. Fraunces 400 headline about 76 px in white, with the two-part pattern and the italic part in `#A8D672`; Outfit 400 body about 32 px in white; the turbine motif at 16% where there's no photo. Logo top-left on a white plate. Website in Outfit 500 at the bottom. One message per post.
- **Documents, letters, reports:** white page, logo top-left (15–18 mm tall), Fraunces headings in `#393939`, eyebrows in `#11709F`, Outfit body at 10.5–11 pt in `#393939`, tables with a `#E9F4FA` header row and `#E2E6EA` rules. Office fallbacks: Georgia and Calibri.
- **Slides (16:9):** white content slides with eyebrow → Fraunces title → content; deep-blue section dividers carrying the turbine motif; the 80/20 split shown with the same blue/green bar.
- **Print:** colours here are defined for screen. Get CMYK matches from the printer rather than converting by guesswork, and proof the lime and the logo's sun.

---

## 14. Accessibility

Measured WCAG 2.x contrast ratios:

| Pair | Ratio | Verdict |
|---|---|---|
| `#393939` text on white | 11.55 | ✅ AAA |
| `#393939` on `#F4F4F4` footer | 10.50 | ✅ AAA |
| `#63666A` muted on white / `#F4F4F4` / `#E9F4FA` | 5.77 / 5.25 / 5.16 | ✅ AA |
| `#2C3A44` on `#E9F4FA` | 10.46 | ✅ AAA |
| `#11709F` blue text on white / `#F4F4F4` / `#E9F4FA` | 5.47 / 4.97 / 4.89 | ✅ AA |
| White on `#0C5480` deep blue | 8.09 | ✅ AAA |
| `#A8D672` lime text on `#0C5480` | 4.83 | ✅ AA |
| `#88C549` lime icon on `#0C5480` | 3.90 | ✅ icons and large text only |
| `#14171C` on `#88C549` lime button (hover `#9BD162`) | 8.66 (10.00) | ✅ AAA |
| White on `#0F7A3D` green button (hover `#0B6532`) | 5.42 (7.19) | ✅ AA |
| `#1893CF` stat numbers on `#E9F4FA` | 3.07 | ✅ large text only (≥24 px, or ≥18.66 px bold) |
| **`#1893CF` brand blue on white** | **3.44** | ❌ fails for small text; use `#11709F` |
| **`#16A755` brand green on white** | **3.14** | ❌ fails for small text; use `#0F7A3D` |
| **White on `#1893CF` / `#16A755`** | **3.44 / 3.14** | ❌ fails for button text; use `#0C5480` / `#0F7A3D` |
| **`#88C549` lime on white** | **2.07** | ❌ never use lime as text on light |

Also standard on every page:
- Visible focus ring: 2 px solid, 3 px offset; `#11709F` on light, `#A8D672` on dark.
- A skip link ("Skip to content") as the first focusable element.
- Touch targets at least 44 px; buttons at least 46 px tall.
- Real `<button>`s for actions; the photo viewer is a native `<dialog>`; the menu button reports `aria-expanded` and closes on Escape.
- Every image has descriptive `alt` text; decorative SVGs are `aria-hidden`.
- Reduced motion is honoured (§10.3).

---

## 15. Known gaps to resolve

1. **Contact email.** Laverne Louw has left; the new enquiries/applications email isn't known yet, and 26 Voortrekker Road needs reconfirming.
2. **Funding PDF.** *HWFLCC-Application-for-Funding.pdf* still names Laverne Louw and her email. It needs a new edition.
3. **Logo files.** Only an 825 × 190 PNG exists. Ask for the original artwork (SVG/AI/EPS) and a one-colour white version for dark backgrounds.
4. **Photography.** No photos of people or funded projects yet. The hero image comes from the Green Horizon concept, not HWFLCC's own library; confirm the rights or replace it.
5. **Old site.** hwflcc.co.za still runs the old WordPress design (Playfair Display + Source Sans Pro). It is superseded by this file once the new site goes live on the domain.

---

## 16. Do / Don't

**Do**
- Open every page with a two-part serif headline, the second part italic.
- Use deep blue for heroes and one feature band per page; alternate white and light-blue tint in between.
- Use the darker role shades (`#11709F`, `#0F7A3D`, `#A8D672`) whenever colour carries text.
- Show the 80/20 principle in blue and green, the same way every time.
- Use the approved facts word for word, and quote the 85% clause in full.
- Use real photos of Hopefield, with honest alt text.
- Keep one main action per view; end pages with a clear next step.

**Don't**
- Don't put the logo on dark or busy backgrounds without a white plate.
- Don't use brand blue or green for small text, or lime for any text on light.
- Don't bold Fraunces or set headings in capitals.
- Don't add hues outside the palette, emoji or stock photos of people.
- Don't invent figures, amounts, beneficiaries or quotes.
- Don't publish Laverne Louw's name or email.
- Don't animate without a reduced-motion fallback, or hide content until JavaScript runs.

---

## 17. Implementation (website)

- **Repo:** `innatestudios147/hwflcc-website`, branch `main`. Netlify project `hwflcc` (SALO team). See the repo README and the project's `claude/website-handover.md` for build and deploy status.
- **Where things live:** tokens and components in `public/assets/css/site.css` (motion is the last section); behaviour in `public/assets/js/site.js`; header and footer in `src/layout.html`; pages in `src/pages/*.html`, each starting with a JSON block (`path`, `title`, `description`, `bodyClass`, optional `noindex`); icons and the turbine drawing in `build.mjs`.
- **Page placeholders:** `{{icon:name}}` or `{{icon:name:extra-class}}`; `{{img:/assets/img/file.jpg|Alt text|sizes=…;cls=…;eager}}`; `{{heroTurbine}}` inside a `.page-hero`.
- **Behaviour hooks:** `.reveal` (fade-up once); groups `.focus-grid .stats .steps .info-grid .send-cards .principle-figures` stagger their children; `.mosaic` and `.gallery` children get the photo curtain; `data-count="176600"` and optional `data-suffix="%"` for count-ups.
- **Build:** `node build.mjs` → `dist/`. CSS and JS URLs carry a content hash. Images, favicons and the funding PDF are committed under `public/`.

---

## 18. Token block (copy-paste)

```css
:root {
  /* Brand */
  --brand-blue: #1893CF;
  --brand-green: #16A755;
  --brand-lime: #88C549;

  /* Roles */
  --bg: #FFFFFF;
  --fg: #393939;
  --ink: #14171C;
  --card: #FFFFFF;
  --surface: #F4F4F4;
  --primary: #11709F;        /* blue for text (5.5:1 on white) */
  --primary-deep: #0C5480;   /* heroes and feature bands (8:1 with white) */
  --primary-fg: #FFFFFF;
  --green-strong: #0F7A3D;   /* green buttons and ticks (5.4:1 on white) */
  --green-deeper: #0B6532;
  --secondary: #E9F4FA;      /* light blue tint */
  --secondary-fg: #2C3A44;
  --muted-fg: #63666A;
  --accent: var(--brand-lime);
  --accent-fg: var(--ink);
  --accent-light: #A8D672;   /* lime for text on deep blue (4.8:1) */
  --hero-fg: #FFFFFF;
  --line: #E2E6EA;
  --hero-overlay: linear-gradient(to top, rgb(20 23 28 / 0.85), rgb(20 23 28 / 0.12) 60%, rgb(20 23 28 / 0.3));

  /* Type */
  --font-display: "Fraunces", Georgia, "Times New Roman", serif;
  --font-body: "Outfit", system-ui, -apple-system, "Segoe UI", sans-serif;

  /* Layout */
  --container: 80rem;
  --gutter: 1.5rem;          /* 1rem at ≤380px */
  --section: 7rem;           /* 4.5rem at ≤767px */
  --header-h: 5rem;

  /* Shape */
  --radius: 1rem;
  --radius-lg: 1.5rem;

  /* Motion */
  --ease-out: cubic-bezier(0.23, 1, 0.32, 1);
  --ease-in-out: cubic-bezier(0.77, 0, 0.175, 1);
  --stagger: 70ms;
}
```
