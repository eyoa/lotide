const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');

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

module.exports = assertObjectsEqual;

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// const abc = { a: "1", b: "2", c: "3" };

// assertObjectsEqual(ab, ba);
// assertObjectsEqual(ab, abc);