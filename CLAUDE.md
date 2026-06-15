# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static portfolio website for Copy E Code, a Brazilian web development agency. Two-page site with no build system, no package manager, and no external dependencies — pure HTML5, CSS3, and vanilla JavaScript served directly in the browser.

**Pages:**
- `index.html` — main portfolio/services page
- `planos.html` — pricing and plans page

## Development

Since there is no build system, development is done by opening HTML files directly in a browser or via any static file server:

```bash
# Quick static server options (no install needed if Python is available)
python3 -m http.server 8080
# or
npx serve .
```

There are no lint, test, or build commands.

## Architecture

### File Responsibilities

| File | Purpose |
|---|---|
| `index.html` | Portfolio page markup |
| `planos.html` | Plans/pricing page markup |
| `css/styles.css` | Design system + all styles for index.html |
| `css/plans.css` | Styles specific to planos.html |
| `js/main.js` | All interactivity for index.html |
| `js/planos.js` | All interactivity for planos.html |
| `i18n.js` | Translation strings and language-switching logic |

### Internationalization (i18n)

The site is bilingual (PT-BR default, EN). The system works as follows:

1. **`i18n.js`** defines a `translations` object keyed by language (`pt-BR`, `en`), then exposes `window.copyECodeI18n` with `setLanguage(lang)` and `getCurrentLanguage()`.
2. HTML elements carry `data-i18n="key.path"` attributes. On language switch, `setLanguage()` walks the DOM and updates `textContent` (or `innerHTML` where needed).
3. Language preference persists in `localStorage` under the key `copyecode-lang`.
4. **When adding or editing user-visible text**, update the translations object in `i18n.js` for both languages. Do not hardcode text strings directly in HTML — use `data-i18n` attributes and define both translations.

### Portfolio Projects (main.js)

Projects are defined in the `PROJECTS` constant at the top of `main.js`:

```js
const PROJECTS = {
  pizzaria: {
    category: { pt: '...', en: '...' },
    title:    { pt: '...', en: '...' },
    description: { pt: '...', en: '...' },
    technologies: ['HTML', 'CSS', 'JS'],
    demoUrl: 'https://...',   // empty string = no demo button shown
    imageUrl: 'https://...'
  },
  // ...
}
```

The single modal (`#conceptModal`) in index.html is dynamically populated with data from this object. To add a new project, add an entry to `PROJECTS` and add the corresponding card markup in the portfolio section of `index.html` with a matching `data-project="key"` attribute.

### Plans & Pricing (planos.js)

Plan-specific data lives at the top of `planos.js`:

- `PLAN_WA_MSGS` — WhatsApp message templates per language and plan tier (essencial, profissional, avancado)
- `PLAN_NAMES` — display names per language
- Price toggle (assinatura / definitiva) is handled by `togglePricing(type)`; prices are stored in `data-price-monthly` and `data-price-onetime` attributes on price elements

### WhatsApp Integration

All contact and plan CTAs route to WhatsApp. The phone number is hardcoded at the top of both `main.js` and `planos.js`:

```js
const WHATSAPP_NUMBER = '554197063216';
```

Update in both files if the number changes.

### Scroll Reveal Animations

`IntersectionObserver` watches elements with the `.reveal` class. When they enter the viewport, the `.visible` class is added, triggering CSS transitions. The implementation respects `prefers-reduced-motion` — add `.reveal` to any new section or card to opt it into this behavior.

### CSS Design System

`css/styles.css` defines CSS custom properties at `:root`:

- Colors: `--bg`, `--white`, `--text-2`, `--border`, and accent/gradient variables
- Typography: Space Grotesk (display) and JetBrains Mono (code accents) via Google Fonts
- Spacing: `--header-height: 72px` used to offset smooth-scroll targets

Use existing custom properties for new styles rather than introducing raw color or spacing values.

### Header Light/Dark Switching

Both pages dynamically switch the header between light and dark classes based on which section is currently in view (`IntersectionObserver` on sections with `data-header-theme="light"` or `"dark"`). New full-width sections should carry one of these attributes.
