function pairElement(str) {
  const ans = [];

  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case 'A':
        ans.push(['A', 'T']);
        break;
      case 'T':
        ans.push(['T', 'A']);
        break;
      case 'G':
        ans.push(['G', 'C']);
        break;
      case 'C':
        ans.push(['C', 'G']);
        break;
    }
  }

  return ans;
}

pairElement('GCG');
