// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`🌟Assertion Passed: ${actual}  ===  ${expected}`);
//   } else {
//     console.log(`🚩Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

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

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };

// assertEqual(eqObjects(ab, ba), true);

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false);


// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true);

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false);


// assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);

// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);

// const obj1 = { a:{ d: 1, e: 2, f:{g:{i:3}, h:4}}, b:5, c:{}};
// const obj2 = { a:{ d: 1, e: 2, f:{g:{i:3}, h:4}}, b:5, c:{}};

// assertEqual(eqObjects(obj1, obj2), true);
