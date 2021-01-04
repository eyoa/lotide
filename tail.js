const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`⭐Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`❗Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(data) {
  return data.slice(1);
};


// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

//test case contents
assertEqual(tail(words).join(' '), "Lighthouse Labs");

//one element array
assertEqual(tail([1]).length, 0);
//empty array what is returned?
console.log(tail([]));