const add = function(para1, para2) {
  return para1 + para2;
};

const subtract = function(para1, para2) {
	return para1 - para2;
};

const sum = function(para) {
  let sum = 0;
  for (let i of para) sum += i;
  return Number(sum);
};

const multiply = function(para) {
  let sum = 1;
  for (let i of para) sum *= i;
  return sum;
};

const power = function(para1, para2) {
	return Math.pow(para1, para2);
};

const factorial = function(para) {
	
  if (para < 0) return -1;
  else if (para === 0) return 1;
  else return para * factorial(para - 1);
  
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
