function frankenSplice(arr1, arr2, n) {
  const temp = [...arr2];
  temp.splice(n, 0, ...arr1);
  return temp;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
