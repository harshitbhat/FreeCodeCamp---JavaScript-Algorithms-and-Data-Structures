function findLongestWordLength(str) {
  return str
    .split(' ')
    .map((word) => word.length)
    .sort((a, b) => b - a)[0];
}

console.log(
  findLongestWordLength('The quick brown fox jumped over the lazy dog')
);
