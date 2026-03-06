// 1) კომენტარების სახით ახსენით Spread 

// Spread Operator არის სამაგიდო (...)
// ის საშუალებას გაძლევს:
// 1. массивის ან ობიექტის ელემენტების გაშლას
// 2. ახალ массивში ან ობიექტში მარტივად ჩასმას

// 1) მასივებთან
const nums = [1, 2, 3];

// ჩვეულებრივი მეთოდი
const numsCopy = [nums[0], nums[1], nums[2]]; 

// spread-ით
const numsSpread = [...nums]; // [1, 2, 3]
// ...nums "ფლობს" ყველა ელემენტს ახალ მასივში

// ასევე შეგვიძლია დავამატოთ ელემენტები
const moreNums = [0, ...nums, 4]; // [0, 1, 2, 3, 4]

// 2) ობიექტებთან
const person = { name: "გიორგი", age: 25 };

// spread-ით შეგვიძლია ახალ ობიექტში ჩასმა ან override
const personCopy = { ...person }; // {name: "გიორგი", age: 25}

const updatedPerson = { ...person, age: 26 }; // {name: "გიორგი", age: 26}
// ერთი პარამეტრის შეცვლა უკვე შესაძლებელია spread-ით

// 3) ფუნქციების არგუმენტებში
function sum(a, b, c){
  return a + b + c;
}

const numbers = [1, 2, 3];

sum(...numbers); // 6
// spread გაშლის მასივს ინდივიდუალურ არგუმენტებად