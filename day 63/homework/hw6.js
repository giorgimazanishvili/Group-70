const calculator = {
  n: 10, // მაგალითის მნიშვნელობა

  sumToN() {
    let sum = 0;
    for (let i = 1; i <= this.n; i++) {
      sum += i;
    }
    return sum;
  }
};

// გამოყენება:
console.log(calculator.sumToN()); // 55
