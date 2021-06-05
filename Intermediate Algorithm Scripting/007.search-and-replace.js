function myReplace(str, before, after) {
  const idx = str.match(before).index;
  const strArr = str.split('');
  const afterArr = after.split('');
  if (before[0].toUpperCase() === before[0]) {
    afterArr[0] = afterArr[0].toUpperCase();
  }
  if (before[0].toLowerCase() === before[0]) {
    afterArr[0] = afterArr[0].toLowerCase();
  }
  strArr.splice(idx, before.length, ...afterArr);
  console.log(strArr.join(''));
  return strArr.join('');
}

myReplace('A quick brown fox jumped over the lazy dog', 'jumped', 'leaped');
myReplace('He is Sleeping on the couch', 'Sleeping', 'sitting');
myReplace('I think we should look up there', 'up', 'Down');
myReplace('This has a spellngi error', 'spellngi', 'spelling');
myReplace('His name is Tom', 'Tom', 'john');
myReplace('Let us get back to more Coding', 'Coding', 'algorithms');
