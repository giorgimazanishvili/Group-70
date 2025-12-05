// 7

const multiplier = {
  number: 3,
  times: 4,
  multiply() {
    let result = 1;

    for (let i = 0; i < this.times; i++) {
      result *= this.number;
    }

    return result;
  }
};

console.log(multiplier.multiply()); // 81  (3 * 3 * 3 * 3)
