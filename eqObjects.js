const eqArrays = require('./eqArrays');

const sortKeys = function(obj) {
  return Object.keys(obj).sort();
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
// Currently only implemented for prmitive values and arrays
const eqObjects = function(object1, object2) {

  //check key arrays in object1 and object 2 are the same
  if (eqArrays(sortKeys(object1), sortKeys(object2))) {
    let matched = 0;
    let keyCount = sortKeys(object1).length;

    //traverse through object1
    for (let item in object1) {
      let item1 = object1[item];
      let item2 = object2[item];

      if (Array.isArray(item1)) {
        if (eqArrays(item1, item2)) {
          matched ++;
        }
      } else if (typeof item1 === "object" && !Array.isArray(item1)) {
        if (eqObjects(item1, item2)) {
          matched++;
        }
      } else {
        if (item1 === item2) {
          matched ++;
        }
      }
    }
    if (matched === keyCount) {
      return true;
    }
  }
  return false;
};

module.exports = eqObjects;

