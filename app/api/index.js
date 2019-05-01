export const API_URL = 'http://localhost:9000';

export function fetchMenu() {
  return fetch(`${API_URL}/menu`, {
    method: 'GET',
  })
    .then(res => res.json())
    .then(data => data);
}
