const { isNumber } = require("lodash");

function sum(a, b) {
  if (isNumber(a) && isNumber(b)) {
    return a + b;
  }
  else {
    throw new TypeError("Некорректный тип данных у аргументов");
  } 
}

module.exports = sum;
