function sum(arr, n, i = 0) {
  // Only change code below this line
  if (n == 0 || i >= n) {
    return 0;
  }
  return arr[i] + sum(arr, n, i + 1);
  // Only change code above this line
}
