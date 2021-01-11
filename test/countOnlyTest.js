const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe("countOnly", () => {
  it("Should return { Fang: 2, Jason: 1} for test array of firstNames", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    
    const itemsToCount = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false };
    assert.deepEqual(countOnly(firstNames, itemsToCount), {Jason: 1, Fang: 2});
    
  });

});