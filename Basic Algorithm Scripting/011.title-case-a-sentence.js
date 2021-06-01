function titleCase(str) {
  return str
    .split(' ')
    .map((el) => {
      const temp = el.toLowerCase().split('');
      return temp[0].toUpperCase() + temp.slice(1).join('');
    })
    .join(' ');
}

titleCase("I'm a little tea pot");
