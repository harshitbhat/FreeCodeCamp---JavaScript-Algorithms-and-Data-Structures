function addTogether() {
  if (arguments.length === 1) {
    if (typeof arguments[0] === 'number') {
      const first = arguments[0];
      return function (num) {
        if (typeof num === 'number') {
          return num + first;
        } else {
          return undefined;
        }
      };
    } else {
      return undefined;
    }
  }
  if (arguments.length === 2) {
    if (typeof arguments[0] === 'number' && typeof arguments[1] === 'number') {
      return arguments[0] + arguments[1];
    } else {
      return undefined;
    }
  }
  return undefined;
}

addTogether(2, 3);
