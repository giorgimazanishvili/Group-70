// 2) შექმენი ობიექტი:
// const user = {
//   name: "Giga",
//   age: 17
// };
// შექმენი ახალი ობიექტი სადაც:
// დაემატება role: "admin"
// დაემატება isActive: true
// ყველაფერი გააკეთე spread-ის გამოყენებით.

const user = {
  name: "Giga",
  age: 17
};

// ახალი ობიექტი spread-ის გამოყენებით
const updatedUser = {
  ...user,       // არსებული ყველა თვისება copy-ს
  role: "admin", // ახალი property დაემატება
  isActive: true // კიდევ ერთი ახალი property
};

console.log(updatedUser);
/*
გამოსახვა:
{
  name: "Giga",
  age: 17,
  role: "admin",
  isActive: true
}
*/