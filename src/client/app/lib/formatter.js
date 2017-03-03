export const currencyUSD = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
});

export function date(date) {
  let dateArray = date.slice(0,10).split('-');
  const y = dateArray[0],
        m = dateArray[1],
        d = dateArray[2];
  return m + '/' + d + '/' + y;
}
