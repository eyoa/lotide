const assert = require('chai').assert;
const findKey = require('../findKey');

describe("findKey", () => {
  it("returns noma given testObj and the callback looking for 2 stars", () => {
    const testObject = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };
    assert.equal(findKey(testObject, x => x.stars === 2), "noma");
  });

  it("returns undefined given testObj and the callback looking for 4 stars (no such value)", () => {
    const testObject = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };
    assert.equal(findKey(testObject, x => x.stars === 4), undefined);
  });

  it("returns 'Akaleri' given testObj and the callback looking for 3 stars", () => {
    const testObject = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };
    assert.equal(findKey(testObject, x => x.stars === 3), "Akaleri");
  });

});