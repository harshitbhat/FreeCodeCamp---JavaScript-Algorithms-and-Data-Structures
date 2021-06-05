function isPrime(n) {
  if (n == 1) {
    return false;
  }
  if (n == 2 || n == 3) {
    return true;
  }
  if (n % 2 == 0 || n % 3 == 0) {
    return false;
  }
  let i = 5;
  while (i * i <= n) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }
  return true;
}

function sumPrimes(num) {
  let ans = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) ans += i;
  }
  return ans;
}

sumPrimes(10);
