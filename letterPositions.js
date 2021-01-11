const eqArrays = function(arr1, arr2) {
  // Check for array sizes, they must be the same size to be considered equal.
  if (arr1.length === arr2.length) {
    let matches = 0;
    //iterate over first and second array and compare contents
    for (let i = 0; i < arr1.length; i++) {

      if (arr1[i] === arr2[i]) {
        matches ++;
      }
    }
    //If the number of matching elements is the same as the length of the array. Then they are equal.
    if (matches === arr1.length) {
      return true;
    }
    
  }
  return false;
};


const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🌟Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`🚩Assertion Failed: ${actual} !== ${expected}`);
  }
};


// returns indicies in the string where each character is found
const letterPositions = function(sentence) {
  // Initialize new empty object to store counts and format sentence to remove spaces so they can be ignored
  let result = {};
  //let noSpace = sentence.split(' ').join('');
 
  //iterate over sentence
  for (let i = 0; i < sentence.length; i++) {
    // If the character is not a space
    if (sentence[i] !== " ") {
      // If letter is in result object add index number, if not add it to object.
      if (sentence[i] in result) {
        result[sentence[i]].push(i);
      } else {
        result[sentence[i]] = [i];
      }
    }
  }
  return result;
};

module.exports = letterPositions;


// //test code

// const c1 = letterPositions("hello");
// assertArraysEqual(c1["h"], [0]);
// assertArraysEqual(c1["e"], [1]);
// assertArraysEqual(c1["l"], [2, 3]);
// assertArraysEqual(c1["o"], [4]);

// const c2 = letterPositions("lighthouse in the house");
// assertArraysEqual(c2["l"], [0]);
// assertArraysEqual(c2["i"], [1, 11]);
// assertArraysEqual(c2["g"], [2]);
// assertArraysEqual(c2["h"], [3, 5, 15, 18]);
// assertArraysEqual(c2["t"], [4, 14]);
// assertArraysEqual(c2["o"], [6, 19]);
// assertArraysEqual(c2["u"], [7, 20]);
// assertArraysEqual(c2["s"], [8, 21]);
// assertArraysEqual(c2["e"], [9, 16, 22]);
// assertArraysEqual(c2["n"], [12]);

