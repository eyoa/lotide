//test code
const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });
  
  it("returns 5 for [5, 6, 7]", () => {
    const array = [5,6,7];
    assert.strictEqual(head(array), 5);
  });
  
  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    const array = ['Hello', 'Lighthouse', 'Labs'];
    assert.strictEqual(head(array), 'Hello');
  });

  it("returns undefined if passed empty array", () => {
    const array = [];
    assert.strictEqual(head(array), undefined);
  });
  
});