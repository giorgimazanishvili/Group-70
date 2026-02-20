// 1) მოცემულია ობიექტი:

// {
//   name: "Giga",
//   age: 16
// }
// დესტრუქტურინგის გამოყენებით შეინახე name და age ცვლადებში.

const person = {
  name: "Giga",
  age: 16
};

const { name, age } = person;

console.log(name); // Giga
console.log(age);  // 16
