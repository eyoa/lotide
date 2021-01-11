const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🌟Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`🚩Assertion Failed: ${actual} !== ${expected}`);
  }
};



//take sentence(as string) and return count of each letter in the sentence
const countLetters = function (sentence){
  // Initialize new empty object to store counts and format sentence to remove spaces so they can be ignored
  let result = {}
  let noSpace = sentence.split(' ').join('');

  //iterate over formatted sentence
  for (var letter of noSpace){
    // If letter is in result object increase count, if not add it to object. 
    if (letter in result){
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  
  return result;
}



//test code
const c1 = countLetters("hahaha");
assertEqual(c1["h"], 3);
assertEqual(c1["a"], 3);

const c2 = countLetters("LHL");
assertEqual(c2["L"], 2);
assertEqual(c2["H"], 1);

console.log(countLetters("lighthouse in the house"));