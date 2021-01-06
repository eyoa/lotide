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


//middle function return an array with only middle elements

const middle = function(originalArray) {
  let mid;
  let midElementArray = [];
  
  //1 or 2 elements return empty
  if (originalArray.length <= 2) {
    return midElementArray;
  } else if (originalArray.length % 2 === 0) {
    //even length arrays returns two center elements
    mid = originalArray.length / 2;
    midElementArray.push(originalArray[mid - 1]);
    midElementArray.push(originalArray[mid]);

  } else {
    //odd length arrays single element
    mid = Math.floor(originalArray.length / 2);
    midElementArray.push(originalArray[mid]);
  }
  
  //return array of just middle elements
  return midElementArray;
};

//test code
assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle([1, 2]),[]);

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
