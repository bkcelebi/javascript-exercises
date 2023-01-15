const convertToCelsius = function(fah) {

  let result = (fah - 32) * 5/9;
  // console.log(result);
  let oneDec = Math.round(result * 10) / 10;
  console.log(oneDec);
  return oneDec;

};

const convertToFahrenheit = function(cal) {

  let result = (cal * 9/5) + 32;
  // console.log(result);
  let oneDec = Math.round(result * 10) / 10;
  console.log(oneDec);
  return oneDec;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
