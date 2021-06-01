function bouncer(arr) {
  return arr.filter((el) => (el ? el : null));
}

console.log(bouncer([7, 'ate', '', false, 9]));
