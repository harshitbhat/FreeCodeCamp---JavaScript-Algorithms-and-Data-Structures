let quoteSample = 'The five boxing wizards jump quickly.';
let alphabetRegexV2 = /\w/g; // \w to check all characters plus numbers, g for all.
let result = quoteSample.match(alphabetRegexV2).length;
