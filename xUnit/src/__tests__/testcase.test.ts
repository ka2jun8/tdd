import assert from "power-assert";
import WasRun from "../wasRun";
import TestResult from "../testResult";
import TestSuite from "../TestSuite";

describe("TestCaseTest", () => { 
  beforeEach(() => {
    this.result = new TestResult();
  });
  
  it("test template", () => {
    const test = new WasRun("testMethod");
    test.run(this.result);
    assert("setUp testMethod tearDown " === test.log);
  });
  
  it("test result", () => {
    const test = new WasRun("testMethod");
    test.run(this.result);
    assert("1 run, 0 failed" === this.result.summary());
  });

  it("test failed result", () => {
    const test = new WasRun("testBrokenMethod");
    test.run(this.result);
    assert("1 run, 1 failed" === this.result.summary());
  });

  it("test failed result formatting", () => {
    this.result.testStarted();
    this.result.testFailed();
    assert("1 run, 1 failed" === this.result.summary());
  });
    
  it("test suite", () => {
    const suite = new TestSuite();
    suite.add(new WasRun("testMethod"));
    suite.add(new WasRun("testBrokenMethod"));
    suite.run(this.result);
    assert("2 run, 1 failed" === this.result.summary());
  });
  
});
