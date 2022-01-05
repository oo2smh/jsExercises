//repeat string num amount of times; sounds like a loop

const repeatString = function(string, num) {

  let i = 1;
  let arr = [];

  if(num < 0) {
    return 'ERROR'
  }

  while (i <= num) {
    arr.push(string)
    i++;
  } 

  return arr.join('');
};

// Do not edit below this line
module.exports = repeatString;
  