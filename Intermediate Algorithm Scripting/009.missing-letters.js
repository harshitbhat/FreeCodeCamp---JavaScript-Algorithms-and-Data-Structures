function fearNotLetter(str) {
  const alphabets = 'abcdefghijklmnopqrstuvwxyz';
  const idx1 = alphabets.indexOf(str[0]);
  const idx2 = alphabets.indexOf(str[str.length - 1]);
  //   console.log(alphabets[idx1], alphabets[idx2]);
  let missing;
  let j = 0;
  for (let i = idx1; i <= idx2; i++) {
    if (str[j] !== alphabets[i]) {
      missing = alphabets[i];
      break;
    }
    j++;
  }
  //   console.log(missing);
  return missing;
}

fearNotLetter('abce');
