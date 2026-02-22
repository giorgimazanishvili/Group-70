// ========================
// 1. ცვლადების გაცვლა (x და y)
// ========================
let x = 100;
let y = 200;

// Destructuring-ის გამოყენებით გაცვლა
[x, y] = [y, x];

const outputDiv = document.getElementById("output");
outputDiv.innerHTML = `
  <p>x = ${x}</p>
  <p>y = ${y}</p>
  <hr>
`;

console.log("x =", x); // 200
console.log("y =", y); // 100

// ========================
// 2. ობიექტის Destructuring + Rest
// ========================
const student = {
  name: "Nika",
  age: 12,
  grade: 6,
  school: "Public School",
  city: "Tbilisi"
};

// Destructuring: name და age ცალკე, დანარჩენი ახალ ობიექტში
const { name, age, ...rest } = student;

outputDiv.innerHTML += `
  <p>Name: ${name}</p>
  <p>Age: ${age}</p>
  <p>Rest: ${JSON.stringify(rest)}</p>
`;

console.log("Name:", name);       // Nika
console.log("Age:", age);         // 12
console.log("Rest:", rest);       // { grade: 6, school: "Public School", city: "Tbilisi" }