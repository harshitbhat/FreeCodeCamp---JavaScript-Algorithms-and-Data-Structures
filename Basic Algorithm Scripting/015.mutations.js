function mutation(arr) {
  const first = arr[0].toLowerCase();
  const second = arr[1].toLowerCase();
  for (const ch of second) {
    if (!first.includes(ch)) return false;
  }
  return true;
}

mutation(['hello', 'hey']);
