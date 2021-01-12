const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("eqObjects", () => {
  it("Returns true if 2 objects contents are the same", () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    assert.isTrue(eqObjects(ab,ba));
  });

  it("Returns false if 2 objects have different lengths even if the other values are the same", () => {
    const ab = { a: "1", b: "2" };
    const abc = { a: "1", b: "2", c: "3" };
    assert.isFalse(eqObjects(ab,abc));
  });

  it("Returns true if 2 objects have the same contents and the values include arrays", () => {
    const cd = {c: "1", d: ["2", 3] };
    const dc ={ d: ["2", 3], c: "1" };
    assert.isTrue(eqObjects(cd,dc));
  });

  it("Returns false if 2 objects have the different values in the arrays", () => {
    const cd = {c: "1", d: ["2", 3] };
    const de = { c: "1", d: ["2", 3, 4] };
    assert.isFalse(eqObjects(cd,de));
  });

  it("Returns true if 2 objects have the same values are objects", () => {
    const obj1 = { a: { z: 1 }, b: 2 };
    const obj2 = { b: 2, a: { z: 1 } };
    assert.isTrue(eqObjects(obj1,obj2));
  });

  it("Returns false if nested objects have the different values", () => {
    const obj1 = { a: { y: 0, z: 1 }, b: 2 };
    const obj2 = { a: { z: 1 }, b: 2 };
    assert.isFalse(eqObjects(obj1,obj2));
  });

  it("Returns false if nested objects have the different values", () => {
    const obj1 = { a: { y: 0, z: 1 }};
    const obj2 = { a: 1, b: 2 };
    assert.isFalse(eqObjects(obj1,obj2));
  });

  it("Returns true if nested objects match and also work for empty objects", () => {
    const obj1 = { a:{ d: 1, e: 2, f:{g:{i:3}, h:4}}, b:5, c:{}};
    const obj2 = { a:{ d: 1, e: 2, f:{g:{i:3}, h:4}}, b:5, c:{}};
    assert.isTrue(eqObjects(obj1,obj2));
  });

});