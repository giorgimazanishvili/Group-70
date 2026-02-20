// რიცხვების მასივი (განსხვავებული დადებითი და უარყოფითი რიცხვები)
const numbers = [10, -5, 3, -2, 7, -8];

// filter() — მხოლოდ დადებითი რიცხვები
const positiveNumbers = numbers.filter(num => num > 0);

// reduce() — დადებითი რიცხვების ჯამი
const sum = positiveNumbers.reduce((acc, num) => acc + num, 0);

// შედეგის დაბეჭდვა
console.log(sum);