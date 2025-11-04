const repeatString = function(word, num) {
  let string = "";
  if (num < 0) {
    return "ERROR";
  }
  for (let i = 0; i < num; i++) {
    string += word;
  }
  return string;
};
console.log(repeatString("hey",3));


// Do not edit below this line
module.exports = repeatString;
