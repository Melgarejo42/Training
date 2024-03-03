

// Converter Fahrenheit para Celsius

let celsius = prompt("Enter a temperature in Celsius")

function convertToFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
}

let fahrenheit = convertToFahrenheit(parseFloat(celsius));

console.log(`${celsius} degrees Celsius is equal to ${fahrenheit} degrees Fahrenheit`);


let fahrenheit = prompt("Enter a temperature in Fahrenheit");

function convertToCelsius(fahrenheit) {
    return (fahrenheit - 32 * 5 / 9).toFixed(2);
}

let celsius = convertToCelsius(parseFloat(fahrenheit));

console.log(`${fahrenheit} degrees Fahrenheit is equal to ${celsius} degrees Celsius`);


