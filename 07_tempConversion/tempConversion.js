// Write two functions that convert temperatures from Fahrenheit to Celsius, and vice versa:
// ```
// ftoc(32) // fahrenheit to celsius, should return 0

// ctof(0) // celsius to fahrenheit, should return 32
// 

//(temp°F − 32) × 5/9 = celsius
// (celsius * 9/5) + 32 = fahrenheit

// Because we are human, we want the result temperature to be rounded to one decimal place: i.e., `ftoc(100)` should return `37.8` and not `37.77777777777778`.

// This exercise asks you to create more than one function so the `module.exports` section of the spec file looks a little different this time.  Nothing to worry about, we're just packaging both functions into a single object to be exported.


const ftoc = function(temp) {
  let changedTemp = (temp - 32) * 5/9;
  return Math.round(changedTemp * 10) / 10;
};

const ctof = function(temp) {
  let changedTemp = (temp * 9/5) + 32;
  return Math.round(changedTemp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
