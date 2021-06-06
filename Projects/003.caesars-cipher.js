function rot13(str) {
  const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let ans = '';
  for (const ch of str) {
    let idx = alphabets.indexOf(ch);
    if (idx === -1) {
      ans += ch;
    } else {
      if (idx > 12) {
        idx = (idx + 13) % 26;
      } else {
        idx = idx + 13;
      }
      ans += alphabets[idx];
    }
  }
  console.log(ans);
  return ans;
}

rot13('SERR PBQR PNZC');
