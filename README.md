# MORROW — Luxury Travel Platform

A curated, cinematic single-page luxury travel experience.

**Go somewhere worth remembering.**

## Structure

```
morrow/
├── index.html          # Shell + static chrome (nav, footer, loader)
├── css/
│   ├── styles.css      # Full design system, components, responsive
│   └── fixes.css       # Critical patches (images, search, overlay)
├── js/
│   └── app.js          # Data, router, views, interactions, state
└── README.md
```

No build step. No frameworks. Vanilla HTML / CSS / JS.

## Run locally

```bash
cd morrow
python3 -m http.server 8080
```

Open: **http://localhost:8080**

Or any static server (`npx serve`, Live Server, etc.).

## Fixes applied in this version

### Images
- Primary images no longer stay invisible until hover.
- `onload` + `onerror` both add the loaded class.
- Safety timeout forces visibility if CDN is slow/blocked.
- Hover still swaps the secondary photo on stay cards.

### Search (⌘K / Ctrl+K)
- Overlay now has a proper backdrop + close button.
- Click outside or press Escape closes it.
- Selecting a result navigates and **closes** the overlay.
- Destination links are correct (Amalfi → destination page, others → stays).

### Wishlist
- Correctly reads the `Set` stored in `localStorage`.
- Saved stays and experiences both render.

### Other
- Route changes always close drawer + overlay.
- Body scroll lock is cleaned up.
- Map POIs, booking flow, filters, concierge, planner, circle, journal remain fully interactive.

## Features

- Hash-based SPA routing (`#/stays`, `#/stay/casa-aurelia`, `#/book`, …)
- Local wishlist (persisted)
- Multi-step booking with calendar
- Interactive Amalfi map
- Experiences booking, trip itinerary, concierge form, trip planner
- Currency switcher, toast notifications, progressive image loading
- Fully responsive + reduced-motion support

## Notes

- Images are hosted on an external CDN. If they fail, placeholders still appear and the UI stays usable.
- All prices are demo data in EUR (converted client-side).
- This is a front-end prototype — no real payment or backend.

---

© 2026 MORROW Travel Ltd. — Design preserved from the original cinematic concept.
