import Money from "./Money";
import Bank from "./Bank";

export default interface Expression {
  plus(addend: Expression): Expression;
  times(multiplier: number): Expression;
  reduce(bank: Bank, to: string): Money;
}
