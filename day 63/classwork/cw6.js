// 6

const calculator = {
  n: 7,
  sumToN() {
    let total = 0;

    for (let num = 1; num <= this.n; num++) {
      total += num;
    }

    return total;
  }
};

console.log(calculator.sumToN()); // 28
