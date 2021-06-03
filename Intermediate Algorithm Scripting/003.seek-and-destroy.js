function destroyer(arr) {
  for (let i = 1; i < arguments.length; i++) {
    let idx = arr.indexOf(arguments[i]);
    while (idx !== -1) {
      arr.splice(idx, 1);
      idx = arr.indexOf(arguments[i]);
    }
  }
  console.log(arr);
  return arr;
}

destroyer(
  [
    'possum',
    'trollo',
    12,
    'safari',
    'hotdog',
    92,
    65,
    'grandma',
    'bugati',
    'trojan',
    'yacht',
  ],
  'yacht',
  'possum',
  'trollo',
  'safari',
  'hotdog',
  'grandma',
  'bugati',
  'trojan'
);
