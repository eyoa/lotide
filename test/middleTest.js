const assert = require('chai').assert;
const middle = require('../middle');

describe("middle",  () => {
  it(" returns [] if the array only has one element", () => {
    const array = [1];
    assert.deepEqual(middle(array), []);
  });

  it("returns [] if the array only has 2 elements", () => {
    const array = [1, 2];
    assert.deepEqual(middle(array), []);
  });

  it("returns [2] if the array is [1, 2, 3]", () => {
    const array = [1, 2, 3];
    assert.deepEqual(middle(array), [2]);
  });

  it("returns [3] if the array is [1, 2, 3, 4, 5]", () => {
    const array = [1, 2, 3, 4, 5];
    assert.deepEqual(middle(array), [3]);
  });

  it("returns [2, 3] if the array is [1, 2, 3, 4]", () => {
    const array = [1, 2, 3, 4];
    assert.deepEqual(middle(array), [2, 3]);
  });

  it("returns [3, 4] if the array is [1, 2, 3, 4, 5, 6]", () => {
    const array = [1, 2, 3, 4, 5, 6];
    assert.deepEqual(middle(array), [3, 4]);
  });

});