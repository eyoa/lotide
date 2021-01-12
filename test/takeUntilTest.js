const assert = require('chai').assert;
const takeUntil = require('../takeUntil');


describe("takeUntil", () => {
  it("returns [1,2,5,7,2] when given [1, 2, 5, 7, 2, -1, 2, 4, 5] and the call back is for values < 0", () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    assert.deepEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ]);
  });

  it("returns  [ 'I\'ve', 'been', 'to', 'Hollywood' ] when given['I've', 'been', 'to', 'Hollywood', ',', 'I've', 'been', 'to', 'Redwood'] and the call back is when the value is ','", () => {
    const data2 =  ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    assert.deepEqual(takeUntil(data2, x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
  });

});