const reverseString = function(str) {
  let arr = Array.from(str);
  arr.reverse();
  return arr.join('');

  // poa: loop backwards and input it into a new array
  // poa: convert the array into a string without any separators join('');

};

// Do not edit below this line
module.exports = reverseString;
