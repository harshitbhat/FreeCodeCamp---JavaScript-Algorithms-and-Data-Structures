function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  for (const obj of collection) {
    let isAllPresent = true;
    for (const key in source) {
      if (obj[key]) {
        if (obj[key] !== source[key]) {
          isAllPresent = false;
          break;
        }
      } else {
        isAllPresent = false;
        break;
      }
    }
    if (isAllPresent) arr.push(obj);
  }
  // Only change code above this line
  return arr;
}

whatIsInAName(
  [
    { first: 'Romeo', last: 'Montague' },
    { first: 'Mercutio', last: null },
    { first: 'Tybalt', last: 'Capulet' },
  ],
  { last: 'Capulet' }
);
