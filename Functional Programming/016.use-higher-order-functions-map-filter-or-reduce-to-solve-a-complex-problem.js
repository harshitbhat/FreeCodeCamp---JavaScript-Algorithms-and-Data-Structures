const squareList = (arr) => {
  // Only change code below this line
  const ans = arr
    .filter((el) => el > 0 && Math.floor(el) === Math.ceil(el))
    .map((el) => el * el);
  return ans;
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
