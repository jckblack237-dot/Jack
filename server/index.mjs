import express from 'express';
import { randomUUID } from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.join(__dirname, 'data');
const DIST_DIR = path.join(__dirname, '..', 'dist');
const PORT = process.env.PORT || 3001;

fs.mkdirSync(DATA_DIR, { recursive: true });

// --- tiny JSON-file store -------------------------------------------------

function readStore(name, fallback) {
  const file = path.join(DATA_DIR, `${name}.json`);
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch {
    return fallback;
  }
}

function writeStore(name, value) {
  fs.writeFileSync(path.join(DATA_DIR, `${name}.json`), JSON.stringify(value, null, 2));
}

// --- app --------------------------------------------------------------------

const app = express();
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'maldives-bites-api' });
});

// Diner reviews, keyed by restaurant id.
app.get('/api/reviews/:restaurantId', (req, res) => {
  const all = readStore('reviews', {});
  res.json(all[req.params.restaurantId] ?? []);
});

app.post('/api/reviews/:restaurantId', (req, res) => {
  const { name, rating, text } = req.body ?? {};
  const numRating = Number(rating);
  if (!name?.trim() || !text?.trim() || !(numRating >= 1 && numRating <= 5)) {
    return res.status(400).json({ error: 'name, text and a 1-5 rating are required' });
  }
  const review = {
    id: randomUUID(),
    name: String(name).trim().slice(0, 60),
    rating: Math.round(numRating),
    text: String(text).trim().slice(0, 1200),
    createdAt: new Date().toISOString(),
  };
  const all = readStore('reviews', {});
  all[req.params.restaurantId] = [review, ...(all[req.params.restaurantId] ?? [])];
  writeStore('reviews', all);
  res.status(201).json(review);
});

// Table reservations.
app.post('/api/reservations', (req, res) => {
  const { restaurantId, restaurantName, name, email, date, time, party } = req.body ?? {};
  if (!restaurantId || !name?.trim() || !email?.trim() || !date || !time || !party) {
    return res.status(400).json({ error: 'restaurantId, name, email, date, time and party are required' });
  }
  const reservation = {
    id: randomUUID(),
    reference: `MB-${Math.random().toString(36).slice(2, 8).toUpperCase()}`,
    restaurantId,
    restaurantName: String(restaurantName ?? '').slice(0, 120),
    name: String(name).trim().slice(0, 80),
    email: String(email).trim().slice(0, 120),
    date,
    time,
    party: Math.max(1, Math.min(20, Number(party) || 2)),
    createdAt: new Date().toISOString(),
  };
  const all = readStore('reservations', []);
  all.push(reservation);
  writeStore('reservations', all);
  res.status(201).json(reservation);
});

app.get('/api/reservations', (_req, res) => {
  res.json(readStore('reservations', []));
});

// Newsletter signups.
app.post('/api/subscribe', (req, res) => {
  const { email } = req.body ?? {};
  if (!email?.trim() || !email.includes('@')) {
    return res.status(400).json({ error: 'a valid email is required' });
  }
  const all = readStore('subscribers', []);
  const clean = String(email).trim().toLowerCase();
  if (!all.some((s) => s.email === clean)) {
    all.push({ email: clean, createdAt: new Date().toISOString() });
    writeStore('subscribers', all);
  }
  res.status(201).json({ subscribed: true });
});

// --- static frontend (production: `npm run build && npm start`) -------------

if (fs.existsSync(DIST_DIR)) {
  // The bundle is built with base /Jack/ for GitHub Pages, so serve it there
  // and point the root at it.
  app.use('/Jack', express.static(DIST_DIR));
  app.get('/', (_req, res) => res.redirect('/Jack/'));
  app.get('/Jack/{*splat}', (_req, res) => res.sendFile(path.join(DIST_DIR, 'index.html')));
}

app.listen(PORT, () => {
  console.log(`maldives-bites-api listening on http://localhost:${PORT}`);
});
