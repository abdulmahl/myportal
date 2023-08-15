let fahrenheitsToCelsius = function(fahrenheits) {
    const celsius = (fahrenheits - 32) * 5/9;
    return celsius.toFixed(0);
}


let celsiusTofahrenheits = function(celsius) {
    const fahrenheits = (celsius * 1.8) + 32;
    return fahrenheits.toFixed(0);
}

console.log(fahrenheitsToCelsius(34));
console.log(celsiusTofahrenheits(5));
