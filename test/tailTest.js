const assertEqual = require('../assertEqual');
const tail = require('../tail');


// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

//test case contents
assertEqual(tail(words).join(' '), "Lighthouse Labs");

//one element array
assertEqual(tail([1]).length, 0);
//empty array what is returned?
// assertArraysEqual(tail([]), []);
console.log(tail([]));