function gcd(a, b) {
  if (b == 0) return a;
  return gcd(b, a % b);
}

function smallestCommons(arr) {
  let x = arr[0];
  let y = arr[1];
  if (x > y) {
    [x, y] = [y, x];
  }
  let ans = x;
  for (let i = x + 1; i <= y; i++) {
    ans = Math.floor((ans * i) / gcd(ans, i));
  }
  return ans;
}

smallestCommons([23, 18]);
