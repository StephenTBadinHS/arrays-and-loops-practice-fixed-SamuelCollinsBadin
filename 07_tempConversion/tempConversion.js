const convertToCelsius = function(Fahrenheit) {
   const Celsius = (Fahrenheit -32) * 5/9;
   return parseFloat (Celsius.toFixed(2));

   
};

const convertToFahrenheit = function(Celsius)  {
    const Fahrenheit = (Celsius * 9/5) + 32
    return parseFloat (Fahrenheit.toFixed(2));
};


// Do not edit below this line

console.log(convertToCelsius(100));
console.log(convertToFahrenheit(100));
