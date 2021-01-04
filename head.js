const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`⭐Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`❗Assertion Failed: ${actual} !== ${expected}`);
  }
};

function head(data) {
  return data[0];
}


assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([7]), 7);
assertEqual(head([]), undefined)