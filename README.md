# Maldives Bites

A full-stack restaurant guide to the Maldives — twenty of the country's most
celebrated tables (undersea domes, overwater decks, and the best of Malé,
Hulhumalé and the nearby islands), each with a full photographed menu, an
editorial review, diner reviews, table booking and directions.

**Live demo:** https://jckblack237-dot.github.io/Jack/

## Features

- **Restaurant directory** — 20 venues, filterable two ways: by location
  (Undersea / Overwater / Beach & Garden / Malé & Hulhumalé) and by cuisine
  (Maldivian, Italian, Thai, Japanese, Indian, American, …). Picking a cuisine
  with a single matching restaurant opens it directly.
- **Full menus** — every restaurant carries a complete multi-course menu
  (chef's signatures, starters, mains, desserts, drinks) with dish photos and
  prices.
- **Booking** — "Book a Table" opens a reservation flow (restaurant, date,
  time, party size) that returns a booking reference.
- **Diner reviews** — star-rated reviews per restaurant, submitted from the
  restaurant card.
- **Directions** — per-restaurant transfer details (seaplane / speedboat /
  ferry), travel time, insider tip and a Google Maps deep link.
- **Search** — instant search across names, islands, atolls and cuisines.
- Framer Motion animations throughout: preloader, hero, scroll-spy nav,
  shared-layout filter pills, animated modal tabs, gallery lightbox.

## Stack

| Layer    | Tech                                                        |
| -------- | ----------------------------------------------------------- |
| Frontend | React 18, TypeScript, Vite 6, Tailwind CSS v4, Framer Motion |
| Backend  | Node.js, Express 5, JSON-file persistence (`server/data/`)  |
| Deploy   | GitHub Actions → GitHub Pages (static)                      |

## Running locally

```bash
npm install

# Terminal 1 — API on :3001
npm run server

# Terminal 2 — frontend on :5173 (proxies /api to :3001)
npm run dev
```

Open the URL Vite prints (`http://localhost:5173/Jack/`).

### Production (single process)

```bash
npm run build   # typecheck + bundle to dist/
npm start       # Express serves the API and dist/ on :3001
```

Then open `http://localhost:3001/Jack/`.

## API

| Method | Route                        | Purpose                          |
| ------ | ---------------------------- | -------------------------------- |
| GET    | `/api/health`                | Liveness check                   |
| GET    | `/api/reviews/:restaurantId` | List diner reviews               |
| POST   | `/api/reviews/:restaurantId` | Add a review `{name, rating, text}` |
| POST   | `/api/reservations`          | Request a table                  |
| GET    | `/api/reservations`          | List reservations                |
| POST   | `/api/subscribe`             | Newsletter signup `{email}`      |

Data is persisted to JSON files in `server/data/` (git-ignored).

### Static deployments

The GitHub Pages deployment is frontend-only. The API client
(`src/lib/api.ts`) detects an unreachable `/api` and falls back to
localStorage, so booking, reviews and the newsletter still work in
demo mode — data stays on the visitor's device.

## Notes

This is a demo/concept project. The restaurants are real and well known, but
menus, prices, ratings and reviews are illustrative — confirm details with
the venues directly.
