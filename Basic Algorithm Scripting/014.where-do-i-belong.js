function getIndexToIns(arr, num) {
  return arr.filter((el) => el < num).length;
}

getIndexToIns([40, 60], 50);
