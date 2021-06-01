function findElement(arr, func) {
  let num;
  for (const el of arr) {
    if (func(el)) return el;
  }
  return num;
}

findElement([1, 2, 3, 4], (num) => num % 2 === 0);
