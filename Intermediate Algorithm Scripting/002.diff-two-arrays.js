function diffArray(arr1, arr2) {
  const myHash = {};
  for (const el of arr1) {
    if (myHash[el]) myHash[el]++;
    else myHash[el] = 1;
  }
  for (const el of arr2) {
    if (myHash[el]) myHash[el]++;
    else myHash[el] = 1;
  }
  var newArr = [];
  for (const el of arr1) {
    if (myHash[el] === 1) {
      newArr.push(el);
    }
  }
  for (const el of arr2) {
    if (myHash[el] === 1) {
      newArr.push(el);
    }
  }
  return newArr;
}

diffArray([1, 'calf', 3, 'piglet'], [7, 'filly']);
