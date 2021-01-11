const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("countLetters", () => {
  it(" Returns {h:3, a: 3} if passed hahaha", () => {
    const input = "hahaha";
    assert.deepEqual(countLetters(input), {h:3, a:3});
  });

  it("Returns {L: 2, H:1} if passed LHL", () => {
    const input = "LHL";
    assert.deepEqual(countLetters(input), {L: 2, H: 1});
  });
});