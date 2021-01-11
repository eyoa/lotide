const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe("findKeyByValue", () => {
  it("Should return drama for 'The Wire given bestTVShowsByGenre Object", () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    assert.equal(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it("Should return undefined for That '70s Show' given bestTVShowsByGenre Object", () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    assert.equal(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });

});