


function SeriesSum(n) {
  let a = 0;
  let b;
  for (let i = 1; i <= n; i++) {
    a = a + 1 / (2 * i + (i - 2));
    b = a.toFixed(2);
    if (b === undefined) {
      b = 0;
    }
  }
  return b;
}

console.log(SeriesSum(2));
