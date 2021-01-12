const assert = require('chai').assert;
const map = require('../map');

describe("map", () => {
  it("Returns ['g', 'c', t', 'm', 't'] when passed ['ground', 'control', 'to','major', 'tom'] and the call back is the first index of string", () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const expResults = ["g", "c", "t", "m", "t"];
    assert.deepEqual((map(words, word => word[0])), expResults);
  });

  it("Returns ['grounds', 'controls', 'tos','majors', 'toms'] when passed ['ground', 'control', 'to','major', 'tom'] and the call back is adding s to the end of the word", () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const expResults = ["grounds", "controls", "tos", "majors", "toms"];
    assert.deepEqual((map(words, word => word + "s")), expResults);
  });

  it("Returns ['Ground', 'Control', 'To','Major', 'Tom']  when passed ['ground', 'control', 'to','major', 'tom'] and the call back is capitilizing the first index of string", () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const expResults = ['Ground', 'Control', 'To', 'Major', 'Tom'];
    assert.deepEqual((map(words, word => word[0].toUpperCase() + word.slice(1))), expResults);
  });

});