import SCInputValidator from "./SCInputValidator";

export default class OneEditChecker {
  static isOneEditAway(stringCombo) {
    if (SCInputValidator.validate(stringCombo)) {
      throw "bad input!";
    }

    const output = stringCombo.getOutput();
    const input = stringCombo.getInput();
    const oneEditCheckerObj = new OneEditChecker();
    let insert, replace, remove;

    switch (output.length) {
      case input.length + 1:
        insert = oneEditCheckerObj.insertRemoveReplaceChar(input, output);
        break;
      case input.length:
        replace = oneEditCheckerObj.insertRemoveReplaceChar(input, output);
        break;
      case input.length - 1:
        remove = oneEditCheckerObj.insertRemoveReplaceChar(output, input);
        break;
      default:
        return false;
    }

    return (
      insert === 0 ||
      insert === 1 ||
      replace === 1 ||
      remove === 0 ||
      remove === 1
    );
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
