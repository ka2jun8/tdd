import TestCase from "./testCase";
import TestResult from "./testResult";

export default class TestSuite {
  tests: TestCase[] = [];
  constructor() {    
  }

  add(test: TestCase) {
    this.tests.push(test);
  }

  run(result: TestResult) {
    this.tests.forEach(test => {
      test.run(result);
    });
  }
}