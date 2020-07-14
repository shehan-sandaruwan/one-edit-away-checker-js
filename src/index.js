import StringCombo from "./StringCombo";
import OneEditChecker from "./OneEditChecker";

const strComb = new StringCombo("sick", "sack");

console.log(OneEditChecker.isOneEditAway(strComb));
