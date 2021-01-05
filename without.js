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


// Returns subset of a given array removing unwanted elements
const without = function(source, itemsToRemove) {
  // Hold new array
  let result = [];

  //iterate over source array
  for (let i = 0; i < source.length; i++) {
    let skip = false;
    for (let j = 0; j < itemsToRemove.length; j ++) {
      if (source[i] === itemsToRemove[j]) {
        skip = true;
      }
    }

    // If it's not item to remove, add to resulting array
    if (!skip) {
      result.push(source[i]);
    }
  }

  return result;
};




//test code
assertArraysEqual((without([1, 2, 3], [1])), [2, 3]);
assertArraysEqual((without(["1", "2", "3"], [1, 2, "3"])), ["1", "2"]);

//check original
const originalArr = [3,5,6,7,8];
assertArraysEqual((without(originalArr, [3,8])), [5,6,7]);
assertArraysEqual(originalArr, [3,5,6,7,8]);