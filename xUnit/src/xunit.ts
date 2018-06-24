import TestSuite from "./testSuite";
import TestResult from "./testResult";

const suite = new TestSuite();
// suite.add();
const result = new TestResult();
suite.run(result);
console.log(result.summary());
