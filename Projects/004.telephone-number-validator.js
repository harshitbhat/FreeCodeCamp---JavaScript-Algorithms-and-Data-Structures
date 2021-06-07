function telephoneCheck(str) {
  /*
    Patters to make:
    555-555-5555 - /^\d{3}-\d{3}-\d{4}$/
    (555)555-5555 - /^\(\d{3}\)\d{3}-\d{4}$/
    (555) 555-5555 - /^\(\d{3}\) \d{3}-\d{4}$/
    555 555 5555 - /^\d{3} \d{3} \d{4}$/
    5555555555 - /^\d{10}$/
    1 555 555 5555 - /^1 \d{3} \d{3} \d{4}$/
    1(555)555-5555 - /^1\(\d{3}\)\d{3}-\d{4}$/
    1 (555) 555-5555 - /^1 \(\d{3}\) \d{3}-\d{4}$/
    1 555-555-5555 -  /^1 \d{3}-\d{3}-\d{4}$/
   */
  const patterns = [
    /^\d{3}-\d{3}-\d{4}$/,
    /^\(\d{3}\)\d{3}-\d{4}$/,
    /^\(\d{3}\) \d{3}-\d{4}$/,
    /^\d{3} \d{3} \d{4}$/,
    /^\d{10}$/,
    /^1 \d{3} \d{3} \d{4}$/,
    /^1\(\d{3}\)\d{3}-\d{4}$/,
    /^1 \(\d{3}\) \d{3}-\d{4}$/,
    /^1 \d{3}-\d{3}-\d{4}$/,
  ];
  return patterns.some((pattern) => pattern.test(str));
}

telephoneCheck('555-555-5555');