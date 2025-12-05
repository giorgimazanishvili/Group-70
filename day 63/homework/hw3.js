const student = {
  score: 75, // მაგალითი

  checkResult() {
    return this.score >= 50 ? "Passed" : "Failed";
  }
};

// გამოყენება:
console.log(student.checkResult()); // Passed