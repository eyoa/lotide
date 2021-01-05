const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`⭐Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`❗Assertion Failed: ${actual} !== ${expected}`);
  }
};

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


//test code
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => should PASS

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => should PASS