export function formatPhone(value) {
  return value.replace(/\D+/g, '').replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, '+$1 ($2) $3-$4-$5');
}

export function formatNumber(value) {
  return `${value}`.replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
}

/**
 * @param number = 100
 * @param titles = ['заявка', 'заявки', 'заявок']
 */
export function declOfNum(number, titles) {
  const cases = [2, 0, 1, 1, 1, 2];

  return titles[(number % 100 > 4 && number % 100 < 20)
    ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}
