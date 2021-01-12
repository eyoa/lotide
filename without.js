// Returns subset of a given array removing unwanted elements
const without = function(source, itemsToRemove) {
  // Hold new array
  let result = [];

  //iterate over source array
  for (let i = 0; i < source.length; i++) {
    let skip = false;
    for (let j = 0; j < itemsToRemove.length; j ++) {
      if (source[i] === itemsToRemove[j]) {
        skip = true;
      }
    }

    // If it's not item to remove, add to resulting array
    if (!skip) {
      result.push(source[i]);
    }
  }

  return result;
};

module.exports = without;