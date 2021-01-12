const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("eqArrays", () => {
  it("Returns true when passed 2 equal flat arrays", () => {
    const arr1 = [1,2,3];
    const arr2 = [1,2,3];
    assert.isTrue(eqArrays(arr1, arr2));
  });

  it("Returns false when passed 2 different flat arrays (order matters)", () => {
    const arr1 = [1,2,3];
    const arr2 = [3,2,1];
    assert.isFalse(eqArrays(arr1, arr2));
  });

  it("Returns true when passed 2 equal flat arrays of strings", () => {
    const arr1 = ["1", "2", "3"];
    const arr2 = ["1", "2", "3"];
    assert.isTrue(eqArrays(arr1, arr2));
  });

  it("Returns false when passed 2 different flat arrays with different data types", () => {
    const arr1 = ["1", "2", "3"];
    const arr2 = ["1", "2", 3];
    assert.isFalse(eqArrays(arr1, arr2));
  });

  it("Returns true when passed 2 same nested arrays", () => {
    const arr1 = [[2, 3], [4]];
    const arr2 = [[2, 3], [4]];
    assert.isTrue(eqArrays(arr1, arr2));
  });

  it("Returns false when passed 2 different nested arrays", () => {
    const arr1 = [[2, 3], [4]];
    const arr2 = [[2, 3], [4, 5]];
    assert.isFalse(eqArrays(arr1, arr2));
  });

  it("Returns false when passed 2 different nested arrays", () => {
    const arr1 = [[2, 3], [4]];
    const arr2 = [[2, 3], 4];
    assert.isFalse(eqArrays(arr1, arr2));
  });

});