const sumAll = function(startNum, endNum) {
  let sum = 0;

// returns ERROR for negative or non-numbers
  if(typeof startNum !== 'number' || typeof endNum !== 'number') {
    return 'ERROR';
  } else if (startNum < 0 || endNum < 0) {
    return 'ERROR';
  }

// works if startNum is larger than endNum
  if (startNum > endNum) {
    for(let i = 0; i <= startNum; i++) {
      sum += i;
    }
    return sum;
  }

// loop for regular inputs 
  for(let i = 0; i <= endNum; i++) {
    sum += i;
  }
  return sum;
};


// Do not edit below this line
module.exports = sumAll;
