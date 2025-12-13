// 5

let counter = {
  count: 0,
  increment: function() {
    for (let i = 0; i < 50; i++) {
      this.count += 1;
    }
  }
};

counter.increment();

console.log(counter.count);