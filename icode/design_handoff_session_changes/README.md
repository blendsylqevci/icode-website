# Handoff: iCode Website — Session Changes Only

## Overview
This bundle documents a specific set of incremental changes to the iCode-KS website (bilingual SQ/EN, vanilla HTML/CSS/JS with a shared `assets/site.js` that injects header/utility-bar/footer and `assets/styles.css` design system). Implement ONLY these changes in the target codebase — do not redesign anything else.

## About the Design Files
The files in this bundle are **design references created in HTML** — they show intended look and behavior. Recreate these changes in the target codebase's existing environment and patterns. If the target is the same static-HTML site, the files can be diffed/merged nearly 1:1.

## Fidelity
**High-fidelity.** Colors, spacing, copy and behavior are final. All user-visible copy is bilingual via `data-sq` / `data-en` attributes (and `data-sq-ph`/`data-en-ph` for placeholders) — every new string must ship in both languages exactly as written in the reference files.

---

## Change 1 — Homepage trusted-clients wall (`index.html`)
- Heading (centered, above wall): SQ "40+ biznese na besojnë platformat dhe integrimet e tyre." / EN "40+ businesses trust us with their platforms and integrations."
  - Style: heading font (Roc Grotesk head family), weight 600, `font-size:1.7rem`, color = ink (#0e0e10 token `--ink`), `letter-spacing:-.02em`, `margin-bottom:52px`.
- Exactly these 16 client names as text logo items, in this order:
  Resort Planet, Durrësi SHPK, Qumshtorja KABI, Ossa Bois France, Olymp Haus, Iso Wiesshorn, 1TREND, MADERA, Woodtec GMBH, iLiving APP, VaultX, Pro Mind Care, Millky way, Turicum, Alpen Transfer Zurich, iData+
- Layout: 4-column grid (`.logo-wall.logo-wall-4`), gap `44px 24px`; ≤900px → 3 cols; ≤520px → 2 cols.
- Item style: head font, weight 700, `1.35rem`, color **#6e6e76** (darkened from #9b9ba2), grayscale, hover → full ink color.

## Change 2 — Client strips on 5 service pages
Insert a small section **immediately before the final CTA section** of each page: centered muted heading (head font, 600, `margin-bottom:36px`) + centered flex logo row (`.logo-wall.logo-wall-strip`, `flex-wrap;justify-content:center;gap:30px 56px`, same item styling as Change 1).
- `service-pos.html` — SQ "Biznese që shesin çdo ditë me POS-in tonë" / EN "Businesses selling every day on our POS": ALDI Group, Basimetzg, Timoni Garden, Kpuctar Agimi, Arena Fitness & Healthy food, Qumshtorja KABI
- `service-web.html` — SQ "Uebfaqe që i kemi ndërtuar dhe i mirëmbajmë" / EN "Websites we built and maintain": VF Art Immobile, Motorent06, Studio NORA, Swiss Morina, Olymp Haus
- `service-mobile.html` — SQ "Aplikacione në duart e përdoruesve" / EN "Apps in users' hands": Taxi Zentrale Zurich, Alpen Transfer Zurich, Servis Jetoni, iLiving APP
- `service-ai.html` — SQ "Zgjidhje AI në produksion" / EN "AI solutions in production": Botagent, iData+, iLiving APP
- `service-ecommerce.html` — SQ "Dyqane online që rriten me ne" / EN "Online stores growing with us": Torima, 1TREND, Millky way

## Change 3 — Header & utility bar (`assets/site.js` + `assets/styles.css`)
- **Burger menu button moved to the far LEFT** of the header bar (before the logo). Bar grid ≤1000px: `auto 1fr auto` (burger | logo | actions), gap 14px.
- "Konsultë falas" / "Free consultation" button stays on the right; vertical padding tightened to **11px top/bottom** (horizontal unchanged at 30px). ≤520px: `padding:11px 15px;font-size:.82rem`.
- **SQ/EN language toggle removed from header**, now lives in the utility bar (right group, between email and the orange badge). Utility-bar variant: `font-size:.75rem`, white bg, buttons `padding:5px 11px`. Active button = primary blue bg, white text.
- Orange utility badge changed: text SQ "Kërko audit falas" / EN "Request free audit", href → `audit.html` (was "Kërko oferte falas" → contact.html).

## Change 4 — Mobile navigation drawer (`assets/site.js` + `assets/styles.css`)
- Drawer is now **full-width**, slides in **from the left**, and starts **below the header** so logo + "Konsultë falas" stay visible; burger animates to X.
- Top offset is set in JS: on open / resize / scroll-while-open, `drawer.style.top = overlay.style.top = header.getBoundingClientRect().bottom` (min 0).
- z-index: header 100 > drawer 90 > overlay 80. `body.menu-open{overflow:hidden}` locks page scroll. Drawer has `border-top:1px solid var(--line)`, padding `26px var(--gutter) 44px`.
- **Accordion groups**: each nav group with children (Platformat, Shërbimet, Projektet/Work, Kompania) renders as a row `.m-item` = main link (flex:1, navigates) + 44×44 chevron button (`data-mtoggle`). Tapping the chevron toggles `.open` on the item (chevron rotates 180°) and on the following `.m-subs` container (display none↔block). Tapping any link closes the drawer.
- Drawer content order: SQ/EN toggle (margin-bottom 22px) → nav items → full-width pill CTA "Na kontakto"/"Get in touch" (`display:flex;width:100%;justify-content:center;padding:16px 24px;margin:28px 0 4px;border-radius:pill;font-size:1.02rem;` no bottom border).

## Change 5 — New page `audit.html` (solution25 shop-audit logic, adapted)
Full reference file included. Structure:
1. **Dark hero** (`--dark` bg) with breadcrumb; split 1.15fr/1fr. Left: H1 SQ "Merr një audit falas ekspert të platformës sate digjitale." / EN "Get a free expert audit of your digital platform."; lead about UX/SEO/search/performance; label "Shkruaj adresën për të filluar" + arrow icon (orange); **URL form**: white pill input (`padding:8px 8px 8px 26px`, shadow) + primary button "Merr auditin falas"/"Get your free audit"; on submit show green success note for 6s and clear input. Below: "Të besuar nga 40+ biznese për platforma & integrime:" + gray bold names: Resort Planet, 1TREND, Olymp Haus, MADERA, iData+.
   Right (hidden ≤940px): two white mock report cards (blue square + title + status pill "Gjendja aktuale" red / "Propozim" green; skeleton lines + tiny page mock).
2. **"Çfarë kontrollojmë në auditin tënd"** — 2×3 bordered grid (1px `--line` gaps, white cells, padding clamp 24–38px): Përvoja e Përdoruesit / Performanca & Core Web Vitals / Shëndeti Teknik i Faqes / Struktura SEO & Dukshmëria / AI Search & AEO / Përmbledhje & Prioritete — each with 28px stroke icon, h3 1.18rem, muted .96rem description (see file for exact copy).
3. **"Pse klientët zgjedhin iCode"** on soft bg: heading + lead split, then 4 stats: 10+ vite përvojë, 120+ projekte, 40+ klientë aktivë, 98% kthehen.
4. CTA band: "Preferon bisedë direkte?" → contact.html.

## Change 6 — Audit intake plumbing
- `contact.html`: service `<select>` gets `id="svc-select"` and a new option `value="audit"` SQ "Audit falas i sistemit / dyqanit" / EN "Free system / store audit" (before "Tjetër"). On load, `?topic=audit` in the URL preselects it.
- `service-ecommerce.html`: orange "Audit falas i dyqanit" hero button now links to `audit.html`.

## Change 7 — Homepage section order + CTA card (`index.html`)
- **Tech Stack section moved to AFTER the Case Studies section** ("Projekte të zgjedhura"). New order: … ERP Platform → Case Studies → Tech Stack → Testimonials …
- The blue color-block under the case cards is replaced by a **case-card** (same component as the Foleja/TeamHR cards, linking to contact.html): square `case-media` with gradient `linear-gradient(135deg,#1b4dff,#4f7cff)`, logo-over (default overlay blend) containing a 56px white **pointing-hand icon** (lucide "pointer") above the label SQ "Biznesi Juaj"/EN "Your Business"; h3 SQ "Biznesi juaj e meriton platformën e vet. Le ta ndërtojmë bashkë." / EN "Your business deserves its own platform. Let's build it together."; two check-tags (Konsultë falas 30-min / Përgjigje brenda 1 dite pune); short p; primary button-styled span "Dërgo kërkesën tuaj"/"Send your request". The yellow 98% block next to it is unchanged.

## Change 8 — Favicon (all pages)
- `assets/brand/favicon.png` = the `</` logo mark cropped square from `logo-black.png` (TM and letterforms erased).
- Every HTML page gets `<link rel="icon" type="image/png" href="assets/brand/favicon.png">` right after the viewport meta.

## Design Tokens (unchanged, for reference)
Primary blue `#1b4dff` (`--primary`), orange `#ff5a1f`-family (`--orange`), ink `#0e0e10`, muted grays, pill radius (`--pill`), fonts: Roc Grotesk (headings, `--ff-head`) + Poppins (body, `--ff-body`). Logo-item gray: `#6e6e76`.

## Files in this bundle
- `index.html`, `audit.html`, `contact.html`, `service-pos.html`, `service-web.html`, `service-mobile.html`, `service-ai.html`, `service-ecommerce.html`
- `assets/site.js` (header/utility/drawer injection + i18n + audit link), `assets/styles.css` (all rules named above)
- `assets/brand/favicon.png`, `assets/brand/logo-black.png`
