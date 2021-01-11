// Takes and array and object. will return an object containing counts of everything in the input object

const countOnly = function(allItems, itemsToCount) {
  const results = {};
  

  for (const item of allItems) {

    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }

  }
  console.log(results);
  return results;
};

module.exports = countOnly;