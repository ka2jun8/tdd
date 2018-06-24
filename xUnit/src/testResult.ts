export default class TestResult {
  runCount: number = 0;
  failedCount: number = 0;

  testStarted() {
    this.runCount++;
  }

  testFailed() {
    this.failedCount++;
  }

  summary(): string {
    return `${this.runCount} run, ${this.failedCount} failed`;
  }
}