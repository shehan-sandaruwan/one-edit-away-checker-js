const oneEditChecker = require("../OneEditChecker");
const stringCombo = require("../StringCombo");

// Input Validation
test("Set output param undefined, should return exception", () => {
  const obj = new stringCombo("hello");
  expect(oneEditChecker.isOneEditAway(obj)).toThrow(TypeError);
});

//Insert
test("Should return true as It requires one character Insertion", () => {
  const obj = new stringCombo("ball", "balls");
  expect(oneEditChecker.isOneEditAway(obj)).toBe(true);
});

//Remove
test("Should return true as It requires one character to remove", () => {
  const obj = new stringCombo("note", "not");
  expect(oneEditChecker.isOneEditAway(obj)).toBe(true);
});

//Replace
test("Should return true as It requires one character to replace", () => {
  const obj = new stringCombo("bat", "bag");
  expect(oneEditChecker.isOneEditAway(obj)).toBe(true);
});

test("Should return false as It input character length not in expected range", () => {
  const obj = new stringCombo("battle", "bag");
  expect(oneEditChecker.isOneEditAway(obj)).toBe(false);
});
