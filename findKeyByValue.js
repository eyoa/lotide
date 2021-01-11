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

module.exports = findKeyByValue;