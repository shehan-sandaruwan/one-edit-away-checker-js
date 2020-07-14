import SCInputValidator from "./SCInputValidator";

export default class OneEditChecker {
  static isOneEditAway(stringCombo) {
    if (SCInputValidator.validate(stringCombo)) {
      throw new Error("bad input!");
    }

    const output = stringCombo.getOutput();
    const input = stringCombo.getInput();
    const oneEditCheckerObj = new OneEditChecker();
    let addRemove, replace;

    switch (output.length) {
      case input.length + 1:
        addRemove = oneEditCheckerObj.insertRemoveReplaceChar(input, output);
        break;
      case input.length:
        replace = oneEditCheckerObj.insertRemoveReplaceChar(input, output);
        break;
      case input.length - 1:
        addRemove = oneEditCheckerObj.insertRemoveReplaceChar(output, input);
        break;
      default:
        return false;
    }

    return addRemove <= 1 || replace === 1; // insertRemoveReplaceChar function doesn't return minus values;
  }

  insertRemoveReplaceChar(input, output) {
    let i = 0;
    let j = 0;
    let misMatchCount = 0;
    let outPutLength = output.length;

    while (outPutLength-- != 0) {
      if (input.charAt(j) && output.charAt(i) != input.charAt(j)) {
        misMatchCount++;
        output.length === input.length ? (i++, j++) : i++;
      } else {
        i++;
        j++;
      }
    }

    return misMatchCount;
  }
}
