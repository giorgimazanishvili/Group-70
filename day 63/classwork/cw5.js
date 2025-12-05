// 5

const multiplier = {
  number: 3,
  times: 4,
  multiply: function () {
    let result = this.number;
    let count = 1;

    while (count < this.times) {
      result *= this.number;
      count++;
    }

    return result;
  }
};

console.log(multiplier.multiply()); // 81  (3 * 3 * 3 * 3)
