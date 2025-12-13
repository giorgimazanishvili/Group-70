// 6

let sum = {
  calculate: function() {
    let total = 0;
    for (let i = 1; i <= 20; i++) {
      total += i;
    }
    return total;
  }
};

console.log(sum.calculate());
