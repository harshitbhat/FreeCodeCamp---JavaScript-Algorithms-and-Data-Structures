function palindrome(str) {
  const arr = str.match(/[^_\W]/g);
  return arr.join('').toLowerCase() === arr.reverse().join('').toLowerCase();
}

palindrome('eye');
