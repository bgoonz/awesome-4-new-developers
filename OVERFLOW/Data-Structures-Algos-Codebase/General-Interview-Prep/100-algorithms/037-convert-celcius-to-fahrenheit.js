/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/* 
The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.

Don't worry too much about the function and return statements as they will be covered in future challenges. For now, only use operators that you have already learned.

Example

celsiusToFahrenheit(-30) returns -22;
celsiusToFahrenheit(-10) returns 14;
celsiusToFahrenheit(0) returns 32;
*/

function convertCelciusToFahrenheit(value) {
  return value * (9 / 5) + 32;
}

test("convert Celcius To Fahrenheit", () => {
  expect(convertCelciusToFahrenheit(-30)).toEqual(-22);
  expect(convertCelciusToFahrenheit(-10)).toEqual(14);
  expect(convertCelciusToFahrenheit(0)).toEqual(32);
});
