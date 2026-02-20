// რიცხვების მასივი
const numbers = [1, 2, 3, 4, 5];

// map() — თითოეული რიცხვი გავამრავლოთ 2-ზე
const doubled = numbers.map(num => num * 2);

// filter() — დავტოვოთ მხოლოდ ლუწი რიცხვები
const evenNumbers = doubled.filter(num => num % 2 === 0);

// საბოლოო მასივის დაბეჭდვა
console.log(evenNumbers);