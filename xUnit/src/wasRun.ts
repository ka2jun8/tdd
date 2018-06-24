import TestCase from "./testCase";

export default class WasRun extends TestCase {
  wasRun: boolean = false;
  wasSetup: boolean = false;
  log: string = "";

  constructor(name: string) {
    super(name);
  }

  setUp() {
    this.wasRun = false;
    this.wasSetup = true;
    this.log = this.log + "setUp ";
  }

  tearDown() {
    this.log = this.log + "tearDown ";
  }

  testMethod() {
    this.wasRun = true;
    this.log = this.log + "testMethod ";
  }

  testBrokenMethod() {
    throw new Error();
  }

}