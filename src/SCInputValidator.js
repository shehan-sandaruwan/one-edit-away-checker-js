import InputValidator from "./InputValidator";

export default class SCInputValidator extends InputValidator {
  constructor() {
    super();
  }

  static validate(stringComboObj) {
    return !stringComboObj.getInput() || !stringComboObj.getOutput();
  }
}
