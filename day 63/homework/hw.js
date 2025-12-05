// ობიექტის შექმნა
const user = {
  age: 22,   // მაგალითად

  checkStatus() {
    return this.age >= 18 ? "Adult" : "Minor";
  }
};

// გამოყენება:
console.log(user.checkStatus()); // Adult