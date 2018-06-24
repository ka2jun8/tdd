import TestResult from "./testResult";

export default class TestCase {
  testName: string;

  constructor(name: string) {
    this.testName = name;
  }

  setUp() {}
  tearDown() {}

  run(result: TestResult) {
    result.testStarted();
    this.setUp();
    try {
      const method = this[this.testName].bind(this);
      method();
    }catch(e) {
      result.testFailed();
    }
    this.tearDown();
  }

}