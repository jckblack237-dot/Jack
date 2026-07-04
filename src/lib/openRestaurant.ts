// Lets any section (e.g. the signature-dishes menu) open a restaurant's
// modal without lifting state: Reviews listens for this event.
export const OPEN_RESTAURANT_EVENT = 'maldives:open-restaurant';

export function openRestaurant(id: string) {
  window.dispatchEvent(new CustomEvent(OPEN_RESTAURANT_EVENT, { detail: id }));
}
