// // Destructuring არის JavaScript-ის შესაძლებლობა,
// რომელიც გვაძლევს საშუალებას ობიექტებიდან ან მასივებიდან
// მნიშვნელობები მარტივად ამოვიღოთ და ცვლადებში შევინახოთ.

// --------------------
// 1) Array Destructuring
// --------------------

// ჩვეულებრივი ფორმა:
const arr = [10, 20, 30];
const a = arr[0];
const b = arr[1];

// Destructuring-ის გამოყენებით:
const [x, y, z] = arr;
// x = 10
// y = 20
// z = 30

// შეგვიძლია ელემენტების გამოტოვება:
const [first, , third] = arr;
// first = 10
// third = 30

// Default მნიშვნელობა:
const [m = 0, n = 0, k = 0, t = 100] = arr;
// t მიიღებს 100-ს, რადგან arr-ში მეოთხე ელემენტი არ არსებობს

// --------------------
// 2) Object Destructuring
// --------------------

const user = {
  name: "Nika",
  age: 25,
  city: "Tbilisi"
};

// ჩვეულებრივი ფორმა:
const userName = user.name;
const userAge = user.age;

// Destructuring:
const { name, age } = user;
// name = "Nika"
// age = 25

// სხვა სახელით შენახვა:
const { city: location } = user;
// location = "Tbilisi"

// Default მნიშვნელობა:
const { country = "Georgia" } = user;
// country = "Georgia"

// --------------------
// 3) Function პარამეტრებში Destructuring
// --------------------

function printUser({ name, age }) {
  console.log(name, age);
}

printUser(user);
// ფუნქციას პირდაპირ ობიექტიდან გამოაქვს საჭირო ველები

// --------------------
// შეჯამება
// --------------------
// Destructuring ამარტივებს კოდს,
// ამცირებს ზედმეტ ცვლადებს,
// და გვაძლევს სუფთა და წაკითხვად სინტაქსს.
