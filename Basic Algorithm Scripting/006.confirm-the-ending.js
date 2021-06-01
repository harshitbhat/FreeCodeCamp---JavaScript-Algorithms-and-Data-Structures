function confirmEnding(str, target) {
  const s = str
    .split('')
    .slice(str.length - target.length)
    .join('');
  return s === target;
}

confirmEnding('Bastian', 'n');
