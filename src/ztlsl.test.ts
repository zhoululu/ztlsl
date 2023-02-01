import ztlsl from './index'

test("works with a shallow object", () => {
  expect(ztlsl({ param: 1 }, "param")).toBe(1);
});
 
test("works with a shallow array", () => {
  expect(ztlsl([1, 2, 3], "[2]")).toBe(3);
});
 
test("works with a shallow array when shouldThrow is true", () => {
  expect(ztlsl([1, 2, 3], "[2]", true)).toBe(3);
});
 
test("works with a nested object", () => {
  const source = { param: [{}, { test: "A" }] };
  expect(ztlsl(source, "param[1].test")).toBe("A");
});
 
test("returns undefined when source is null", () => {
  expect(ztlsl(null, "param[1].test")).toBeUndefined();
});
 
test("returns undefined when path is wrong", () => {
  expect(ztlsl({ param: [] }, "param[1].test")).toBeUndefined();
});
 
test("throws an exception when path is wrong and shouldThrow is true", () => {
  expect(() => ztlsl({ param: [] }, "param[1].test", true)).toThrow();
});
 
test("works tranparently with Sets and Maps", () => {
  const source = new Map([
    ["param", new Set()],
    ["innerSet", new Set([new Map(), new Map([["innerKey", "value"]])])],
  ]);
  expect(ztlsl(source, "innerSet[1].innerKey")).toBe("value");
});