//middle function return an array with only middle elements

const middle = function(originalArray) {
  let mid;
  let midElementArray = [];
  
  //1 or 2 elements return empty
  if (originalArray.length <= 2) {
    return midElementArray;
  } else if (originalArray.length % 2 === 0) {
    //even length arrays returns two center elements
    mid = originalArray.length / 2;
    midElementArray.push(originalArray[mid - 1]);
    midElementArray.push(originalArray[mid]);

  } else {
    //odd length arrays single element
    mid = Math.floor(originalArray.length / 2);
    midElementArray.push(originalArray[mid]);
  }
  
  //return array of just middle elements
  return midElementArray;
};

module.exports = middle;
