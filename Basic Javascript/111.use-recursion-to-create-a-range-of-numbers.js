function rangeOfNumbers(startNum, endNum) {
  if (startNum > endNum) {
    return [];
  }
  return [startNum, ...rangeOfNumbers(startNum + 1, endNum)];
}
