// რიცხვების მასივი
const numbers = [1, 2, 3, 4, 5];

// reduce() მეთოდი — ყველა რიცხვის ნამრავლი
const result = numbers.reduce((acc, num) => acc * num, 1);

// შედეგის დაბეჭდვა
console.log(result);