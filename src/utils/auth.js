const tokenKey = import.meta.env.VITE_APP_TOKEN_KEY;

function storage() {
  return window.localStorage
    .getItem('remember') === 'true' ? localStorage : sessionStorage;
}

export function getToken() {
  return storage().getItem(tokenKey);
}

export function setToken(token) {
  return storage().setItem(tokenKey, token);
}

export function removeToken() {
  return storage().removeItem(tokenKey);
}
