const reverseString = function(str) {
  let stringArr = str.split("");
  
  let reversedArr = stringArr.reverse();

  let reversedStr = reversedArr.join("");
  
  return reversedStr;

 
}

console.log(reverseString("hello there"));

// Do not edit below this line
module.exports = reverseString;
