const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🌟Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`🚩Assertion Failed: ${actual} !== ${expected}`);
  }
};


// Takes an object and a value. Check the object for first key which contains the value.
// returns undefined if no key with value is found.
const findKeyByValue = function(givenObj, valueToFind) {
  // Placeholder for search results. No default value so if not found returns undefined.
  let result;
  //Iterate over given object
  for (let item in givenObj) {
    //if the value of the key matches the value we are looking for the result is the key.
    if (givenObj[item] === valueToFind) {
      result = item;
    }
  }
  return result;
};


//test cases

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);