const convertToCelsius = function(fahrenheit) {
  
  let newTemp= Math.round((((fahrenheit)-32)* (5/9))*10)/10;
  return newTemp;
};

const convertToFahrenheit = function(celsius) {
  let newTemp= Math.round((((celsius)*(9/5))+32)*10)/10;
  return newTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};





////	x °F ≘ (x − 32) × 5/9 
///x °C ≘ (x × 9/5 + 32)

//Math.round(number*10)/10