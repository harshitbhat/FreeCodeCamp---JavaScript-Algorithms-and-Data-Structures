function translatePigLatin(str) {
  const vowels = 'aeiou';
  if (vowels.includes(str[0])) {
    return str + 'way';
  } else {
    let toMove = '';
    let i = 0;
    while (!vowels.includes(str[i]) && i < str.length) {
      toMove += str[i];
      i++;
    }
    return str.split('').slice(i).join('') + toMove + 'ay';
  }
}

translatePigLatin('consonant');
