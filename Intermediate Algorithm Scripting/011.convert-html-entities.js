function convertHTML(str) {
  const entitiesMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;',
  };
  let ans = '';
  for (let i = 0; i < str.length; i++) {
    if (entitiesMap[str[i]]) {
      ans += entitiesMap[str[i]];
    } else {
      ans += str[i];
    }
  }

  return ans;
}

convertHTML('Dolce & Gabbana');
