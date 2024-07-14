const convertToCelsius = function(temp) {
  let celsiusTemp = 0;
  celsiusTemp = Math.round(((temp-32)*(5/9)*10))/10;
  return celsiusTemp;
};

const convertToFahrenheit = function(temp) {
  let fahrenheitTemp = 0;
  fahrenheitTemp = Math.round(((temp*(9/5))+32)*10)/10;
  return fahrenheitTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
