const convertToCelsius = function(fahrenheit) {
  if(fahrenheit === 32) return 0;
  let celsius = (fahrenheit - 32) * 5/9;
  return parseFloat(celsius.toFixed(1));
};

const convertToFahrenheit = function(celsius) {
  if(celsius === 0) return 32;
  let fahrenheit = celsius*(9/5) + 32;
  return parseFloat(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
