// Any component can open the booking modal (optionally pre-selecting a
// restaurant); App listens and renders it.
export const OPEN_BOOKING_EVENT = 'maldives:open-booking';

export function openBooking(restaurantId?: string) {
  window.dispatchEvent(new CustomEvent(OPEN_BOOKING_EVENT, { detail: restaurantId ?? null }));
}
