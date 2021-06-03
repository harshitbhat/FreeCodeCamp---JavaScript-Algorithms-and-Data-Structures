const sumTillN = (n) => Math.floor((n * (n + 1)) / 2);

function sumAll(arr) {
  let x = arr[0];
  let y = arr[1];
  if (x > y) [x, y] = [y, x];
  return sumTillN(y) - sumTillN(x - 1);
}

sumAll([1, 4]);
