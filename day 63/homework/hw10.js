const evenCounter = {
  numbers: [1, 2, 4, 7, 10, 13, 16],

  countEvens() {
    let count = 0;

    for (let i = 0; i < this.numbers.length; i++) {
      if (this.numbers[i] % 2 === 0) {
        count++;
      }
    }

    return count;
  }
};

// გამოყენება:
console.log(evenCounter.countEvens()); // 4