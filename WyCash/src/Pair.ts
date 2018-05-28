export default class Pair {
  constructor(private from: string, private to: string) {}
  equals(pair: Pair): boolean {
    return this.from === pair.from && this.to === pair.to;
  }
  hashCode() {
    return 0;
  }
  toString(): string {
    return this.from + "->" + this.to;
  }

  static createKey(from, to) {
    return from + "->" + to;
  }
}
