// 5) მოცემულია სამი ცვლადი:
// let a = 1
// let b = 2
// let c = 3
// Destructuring-ის გამოყენებით:
// გააკეთეთ ისე, რომ a-ში ჩავიდეს c-ის მნიშვნელობა
// b დარჩეს უცვლელი
// c-ში ჩავიდეს a-ის ძველი მნიშვნელობა
// (არ გამოიყენოთ დამატებითი ცვლადები)
// შემდეგ მოცემულია ობიექტი:
// const teacher = {
// name: "Maia",
// subject: "Math",
// experience: 5,
// school: "High School",
// city: "Kutaisi"
// }

// Destructuring-ის გამოყენებით:

// name გადაარქვით teacherName
// subject გადაარქვით mainSubject
// experience შეინახეთ ცვლადში yearsOfExperience
// დანარჩენი მონაცემები შეინახეთ სხვა ობიექტში restInfo
// დაბეჭდეთ ყველა შედეგი.


// ნაწილი 1

let a = 1;
let b = 2;
let c = 3;

// Destructuring swap
[a, , c] = [c, b, a];

console.log(a); // უნდა იყოს 3
console.log(b); // უნდა იყოს 2
console.log(c); // უნდა იყოს 1

// ნაწილი 2

const teacher = {
  name: "Maia",
  subject: "Math",
  experience: 5,
  school: "High School",
  city: "Kutaisi"
};

// Destructuring with renaming and rest
const {
  name: teacherName,
  subject: mainSubject,
  experience: yearsOfExperience,
  ...restInfo
} = teacher;

console.log(teacherName);       // "Maia"
console.log(mainSubject);       // "Math"
console.log(yearsOfExperience); // 5
console.log(restInfo);          // { school: "High School", city: "Kutaisi" }