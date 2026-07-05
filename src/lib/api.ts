// API client for the Express backend, with a localStorage fallback so the
// static GitHub Pages deployment keeps working: if /api is unreachable the
// same data is persisted on-device instead.

export interface DinerReview {
  id: string;
  name: string;
  rating: number;
  text: string;
  createdAt: string;
}

export interface ReservationInput {
  restaurantId: string;
  restaurantName: string;
  name: string;
  email: string;
  date: string;
  time: string;
  party: number;
}

export interface Reservation extends ReservationInput {
  id: string;
  reference: string;
  createdAt: string;
}

async function tryApi<T>(path: string, init?: RequestInit): Promise<T | null> {
  try {
    const res = await fetch(`/api${path}`, {
      headers: { 'content-type': 'application/json' },
      ...init,
    });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

function readLocal<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function writeLocal(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // storage full/blocked — nothing sensible to do
  }
}

export async function getReviews(restaurantId: string): Promise<DinerReview[]> {
  const fromApi = await tryApi<DinerReview[]>(`/reviews/${restaurantId}`);
  if (fromApi) return fromApi;
  return readLocal<DinerReview[]>(`mb:reviews:${restaurantId}`, []);
}

export async function addReview(
  restaurantId: string,
  input: { name: string; rating: number; text: string },
): Promise<{ review: DinerReview; offline: boolean }> {
  const fromApi = await tryApi<DinerReview>(`/reviews/${restaurantId}`, {
    method: 'POST',
    body: JSON.stringify(input),
  });
  if (fromApi) return { review: fromApi, offline: false };

  const review: DinerReview = {
    id: crypto.randomUUID(),
    name: input.name.trim().slice(0, 60),
    rating: Math.round(input.rating),
    text: input.text.trim().slice(0, 1200),
    createdAt: new Date().toISOString(),
  };
  const key = `mb:reviews:${restaurantId}`;
  writeLocal(key, [review, ...readLocal<DinerReview[]>(key, [])]);
  return { review, offline: true };
}

export async function createReservation(
  input: ReservationInput,
): Promise<{ reservation: Reservation; offline: boolean }> {
  const fromApi = await tryApi<Reservation>('/reservations', {
    method: 'POST',
    body: JSON.stringify(input),
  });
  if (fromApi) return { reservation: fromApi, offline: false };

  const reservation: Reservation = {
    ...input,
    id: crypto.randomUUID(),
    reference: `MB-${Math.random().toString(36).slice(2, 8).toUpperCase()}`,
    createdAt: new Date().toISOString(),
  };
  writeLocal('mb:reservations', [...readLocal<Reservation[]>('mb:reservations', []), reservation]);
  return { reservation, offline: true };
}

export async function subscribe(email: string): Promise<{ offline: boolean }> {
  const fromApi = await tryApi<{ subscribed: boolean }>('/subscribe', {
    method: 'POST',
    body: JSON.stringify({ email }),
  });
  if (fromApi) return { offline: false };
  writeLocal('mb:subscribed', email.trim().toLowerCase());
  return { offline: true };
}
