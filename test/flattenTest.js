const assert = require('chai').assert;
const flatten = require('../flatten');

describe("flatten", () => {
  it("will return [1,2,3,4,5,6] given [1,2,[3,4],5,[6]]", () => {
    const nestedArray = [1, 2, [3, 4], 5, [6]];
    assert.deepEqual(flatten(nestedArray), [1,2,3,4,5,6]);
  });
  
});