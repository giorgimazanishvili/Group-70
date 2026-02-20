// 4) მოცემულია მასივი:
// [10, 20, 30, 40, 50]
// დესტრუქტურინგის გამოყენებით:=
// აიღე პირველი ორი ელემენტი
// დანარჩენი შეინახე ცალკე მასივში

const numbers = [10, 20, 30, 40, 50];

const [first, second, ...rest] = numbers;

console.log(first);  // 10
console.log(second); // 20
console.log(rest);   // [30, 40, 50]