const numbers = {
  list: [3, -1, 7, 0, -5, 10],

  getPositive() {
    const result = [];
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i] > 0) {
        result.push(this.list[i]);
      }
    }
    return result;
  }
};

// გამოყენება:
console.log(numbers.getPositive()); // [3, 7, 10]