function truncateString(str, num) {
  return num >= str.length ? str : str.split('').slice(0, num).join('') + '...';
}

const ans = truncateString('A-tisket a-tasket A green and yellow basket', 8);

console.log(ans);
