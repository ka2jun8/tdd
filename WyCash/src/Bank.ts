import Expression from "./Expression";
import Pair from "./Pair";
import Money from "./Money";

export default class Bank {
  rates: {
    [pairKey: string]: {
      pair: Pair;
      rate: number;
    };
  } = {} as any;

  reduce(source: Expression, to: string): Money {
    return source.reduce(this, to);
  }

  addRate(from: string, to: string, rate: number) {
    const pair = new Pair(from, to);
    this.rates[pair.toString()] = { pair, rate };
  }

  rate(from: string, to: string): number {
    if (from === to) return 1;
    const rateObject = this.rates[Pair.createKey(from, to)];
    return rateObject ? rateObject.rate : 1;
  }
}
