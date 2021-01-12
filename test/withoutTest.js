const assert = require('chai').assert;
const without = require('../without');

describe("without", () => {
  it("Should return [2,3] when given array [1,2,3] and [1] as element to remove", () => {
    const originalArr = [1,2,3];
    assert.deepEqual(without(originalArr, [1]), [2,3]);
  });

  it("Original array shouldn't be altered. Original array should still be the same after it runs", () => {
    const originalArr = [3,5,6,7,8];
    assert.deepEqual(without(originalArr, [3,8]), [5,6,7]);
    assert.deepEqual(originalArr, [3,5,6,7,8]);

  });

});