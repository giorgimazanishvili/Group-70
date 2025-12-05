// 3

const student = {
  name: "Nika",
  score: 45,
  passOrFail: function () {
    if (this.score >= 50) {
      return "Passed";
    } else {
      return "Failed";
    }
  }
};

console.log(student.passOrFail()); // "Failed"
