//take sentence(as string) and return count of each letter in the sentence
const countLetters = function(sentence) {
  // Initialize new empty object to store counts and format sentence to remove spaces so they can be ignored
  let result = {};
  let noSpace = sentence.split(' ').join('');

  //iterate over formatted sentence
  for (let letter of noSpace) {
    // If letter is in result object increase count, if not add it to object.
    if (letter in result) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  
  return result;
};

module.exports = countLetters;

console.log(countLetters("hahaha"));