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


// Function takes an array to map and a callback function
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

//test code
// const words = ["ground", "control", "to", "major", "tom"];

// const results1 = map(words, word => word[0]);

// assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);

// const results2 = map(words, word => word + "s");
// assertArraysEqual(results2, ["grounds", "controls", "tos", "majors", "toms"]);

// const results3 = map(words, word => word[0].toUpperCase() + word.slice(1));
// assertArraysEqual(results3,  ['Ground', 'Control', 'To', 'Major', 'Tom' ]);

