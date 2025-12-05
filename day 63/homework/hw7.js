const doubler = {
  numbers: [2, 5, -3, 10],

  doubleAll() {
    const result = [];
    for (let i = 0; i < this.numbers.length; i++) {
      result.push(this.numbers[i] * 2);
    }
    return result;
  }
};

// გამოყენება:
console.log(doubler.doubleAll()); // [4, 10, -6, 20]
