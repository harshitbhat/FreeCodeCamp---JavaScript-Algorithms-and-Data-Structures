function sumFibs(num) {
  let ans = 0;
  let a = 1;
  let b = 1;
  if (a <= num) {
    ans += a;
  }
  if (b <= num) {
    ans += b;
  }
  let c = a + b;
  while (c <= num) {
    if (c % 2 === 1) {
      ans += c;
    }
    c = a + b;
    a = b;
    b = c;
  }

  return ans;
}

sumFibs(4000000);
