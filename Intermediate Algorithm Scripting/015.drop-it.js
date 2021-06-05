function dropElements(arr, func) {
  let i = 0;
  while (i < arr.length) {
    if (!func(arr[i])) {
      arr.splice(i, 1);
      continue;
    } else {
      break;
    }
  }
  return arr;
}

dropElements([1, 2, 3, 4], function (n) {
  return n >= 3;
});

dropElements([0, 1, 0, 1], function (n) {
  return n === 1;
});

dropElements([1, 2, 3, 9, 2], function (n) {
  return n > 2;
});
