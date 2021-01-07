// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🌟Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`🚩Assertion Failed: ${actual} !== ${expected}`);
  }
};


// function scan object return first key for when the callback returns true if no key then return undefined.

const findKey = function(searchObj, callback) {
  for (let key in searchObj) {
    if (callback(searchObj[key])) {
      return key;
    }
  }
  return;
};



//test code

const testObject = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

const test1 = findKey(testObject, x => x.stars === 2);
assertEqual(test1, "noma");

const test2 = findKey(testObject, x => x.stars === 4);
assertEqual(test2, undefined);

const test3 = findKey(testObject, x => x.stars === 3);
assertEqual(test3, "Akaleri");
