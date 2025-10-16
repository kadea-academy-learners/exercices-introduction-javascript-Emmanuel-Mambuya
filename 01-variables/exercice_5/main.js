// Exercice 5
// Conversion de la Temperature, de Celsius en Fahraneit

function celsiusToFahrenheit (tempCelsius){
    return(tempCelsius*9/5) + 32;
}

let temperatureCelsius = 25;
let temperatureFahrenheit = celsiusToFahrenheit(temperatureCelsius);
console.log(temperatureCelsius + "°C = " + temperatureFahrenheit + "°F");

module.exports = {
    celsiusToFahrenheit,
};

  

