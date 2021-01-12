// function takes array to work with and a callback
// function takes a slice of the array until callbacak returns true
const takeUntil = function(array, callback) {
  let result = [];
  for (const item of array) {

    if (callback(item)) {
      return result;
    } else {
      result.push(item);
    }
  }
};

module.exports = takeUntil;