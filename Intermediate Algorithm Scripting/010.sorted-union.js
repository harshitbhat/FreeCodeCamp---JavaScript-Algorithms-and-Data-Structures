function uniteUnique(arr) {
  const mySet = new Set();
  for (let i = 0; i < arguments.length; i++) {
    for (let j = 0; j < arguments[i].length; j++) {
      mySet.add(arguments[i][j]);
    }
  }
  return [...mySet];
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
