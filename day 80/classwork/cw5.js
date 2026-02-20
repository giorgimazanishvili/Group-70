// 5) შექმენი რიცხვების მასივი და გამოიყენე reduce, რომ დაითვალო ყველა რიცხვის ჯამი.

// რიცხვების მასივი
const numbers = [1, 2, 3, 4, 5];

// reduce-ის გამოყენება რიცხვების ჯამის გასათვლელად
const sum = numbers.reduce(function(accumulator, current) {
  return accumulator + current;
}, 0); // 0 არის საწყისი მნიშვნელობა

console.log("ჯამი:", sum);