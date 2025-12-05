// 4

const calculator = {
  n: 10,
  sumToN: function () {
    let sum = 0;
    let i = 1;

    while (i <= this.n) {
      sum += i;
      i++;
    }

    return sum;
  }
};

console.log(calculator.sumToN()); // 55
