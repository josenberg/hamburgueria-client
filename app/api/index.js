export const API_URL = 'http://localhost:9000';

export function fetchMenu() {
  return fetch(`${API_URL}/menu`, {
    method: 'GET',
  })
    .then(res => res.json())
    .then(data => data);
}

export function fetchRules() {
  return fetch(`${API_URL}/rules`, {
    method: 'GET',
  })
    .then(res => res.json())
    .then(data => data);
}

export function fetchIngredients() {
  return fetch(`${API_URL}/ingredients`, {
    method: 'GET',
  })
    .then(res => res.json())
    .then(data => data);
}
