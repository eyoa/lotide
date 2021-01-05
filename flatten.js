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



//take in an array included nested arryas and return flattened version of array (only 1 level deep)
const flatten = function(original) {
  let flatResult = [];
  // Iterate over original array
  for (let i = 0; i < original.length; i++) {
    // If the element is an array Iterate over that array and extract elements
    if (Array.isArray(original[i])) {
      for (let j = 0; j < original[i].length; j++) {
        flatResult.push(original[i][j]);
      }
    } else {
      //if element isn't an array add element to flattened result.
      flatResult.push(original[i]);
    }
  }

  return flatResult;
};




//test code
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);