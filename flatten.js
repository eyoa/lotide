//take in an array included nested arryas and return flattened version of array (only 1 level deep)
const flatten = function(original) {
  let flatResult = [];
  // Iterate over original array
  for (let i = 0; i < original.length; i++) {
    // If the element is an array Iterate over that array and extract elements
    if (Array.isArray(original[i])) {
      for (let j = 0; j < original[i].length; j++) {
        flatResult.push(original[i][j]);
      }
    } else {
      //if element isn't an array add element to flattened result.
      flatResult.push(original[i]);
    }
  }

  return flatResult;
};

module.exports= flatten;