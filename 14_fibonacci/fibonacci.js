const fibonacci = function(n) {
  n = Number(n);

  if (n < 0) {
      return "OOPS";
  } else if (n === 0) {
      return 0;
  } else if (n === 1 || n === 2) {
    return 1;
  }

  let indexOne = 1;
  let indexTwo = 1;
  
  for (let i = 3; i <= n; i++) {
    let sum = indexOne + indexTwo;
    indexOne = indexTwo;
    indexTwo = sum;
  }
  return indexTwo;
};

// Do not edit below this line
module.exports = fibonacci;
