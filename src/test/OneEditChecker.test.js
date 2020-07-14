import OneEditChecker from "../OneEditChecker";
import StringCombo from "../StringCombo";

// Input Validation
test("Set output param undefined, should return exception", () => {
  const obj = new StringCombo("hello");
  const val = () => {
    OneEditChecker.isOneEditAway(obj);
  };
  expect(val).toThrow("bad input!");
});

//Insert
test("Should return true as It requires one character Insertion", () => {
  const obj = new StringCombo("ball", "balls");
  expect(OneEditChecker.isOneEditAway(obj)).toBe(true);
});

//Remove
test("Should return true as It requires one character to remove", () => {
  const obj = new StringCombo("note", "not");
  expect(OneEditChecker.isOneEditAway(obj)).toBe(true);
});

//Replace
test("Should return true as It requires one character to replace", () => {
  const obj = new StringCombo("bat", "bag");
  expect(OneEditChecker.isOneEditAway(obj)).toBe(true);
});

test("Should return false as It input character length not in expected range", () => {
  const obj = new StringCombo("battle", "bag");
  expect(OneEditChecker.isOneEditAway(obj)).toBe(false);
});
