function steamrollArray(arr) {
  const ans = [];
  for (const el of arr) {
    if (Array.isArray(el)) {
      ans.push(...steamrollArray(el));
    } else {
      ans.push(el);
    }
  }
  return ans;
}

steamrollArray([1, [2], [3, [[4]]]]);
