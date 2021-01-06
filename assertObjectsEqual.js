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

const sortKeys = function(obj) {
  return Object.keys(obj).sort();
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
// Currently only implemented for prmitive values and arrays
const eqObjects = function(object1, object2) {
  //check key arrays are the same

  if (eqArrays(sortKeys(object1), sortKeys(object2))) {
    let matched = 0;
    let keyCount = sortKeys(object1).length;

    for (let item in object1) {
      //console.log("checking", object1[item], object2[item]);
      if (Array.isArray(object1[item])) {
        if (eqArrays(object1[item], object2[item])) {
          matched ++;
        }
      } else {
        if (object1[item] === object2[item]) {
          matched ++;
        }
      }
    }
    if (matched === keyCount) {
      return true;
    }
  }
  return false;
};


// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // import util library's inspect function
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`🌟Assertion Passed: ${inspect(actual)}  ===  ${inspect(expected)}`);
  } else {
    console.log(`🚩Assertion Failed: ${inspect(actual)}  !==  ${inspect(expected)}`);
  }
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

assertObjectsEqual(ab, ba);
assertObjectsEqual(ab, abc);