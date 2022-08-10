const add = function(number1, number2) {
  return number1 + number2;
};

const subtract = function(number1, number2) {
	return number1 - number2;
};

const sum = function(...number) {
	let arrayOfNumbers = number[0];
  let sum = arrayOfNumbers.reduce((a, b) => a + b, 0);
  return sum;
};

const multiply = function(...number) {
  let arrayOfNumbers = number[0];
  let sum = arrayOfNumbers.reduce((a, b) => a *b);
  return sum;
};

const power = function(number, exp) {
	let exponentValue = Math.pow(number, exp);
  return exponentValue;
};

const factorial = function(number) {
    let answer = 1;
    if (number == 0 || number == 1){
      return answer;
    }else{
      for(let i = number; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }
  }
  


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
