// 5) მოცემულია მასივი:

// ["BMW", "Mercedes", "Audi", "Toyota"]
// დესტრუქტურინგით აიღე პირველი და მესამე ელემენტი.
// 6) მოცემულია რიცხვების მასივი:
// [5, 12, 8, 20, 3]
// reduce გამოყენებით დაითვალე მხოლოდ ლუწი რიცხვების ჯამი.


const cars = ["BMW", "Mercedes", "Audi", "Toyota"];

// ორიელი ელემენტის გამოტანა, მეორე წაგვყავდეს უგულებელყოფით
const [firstCar, , thirdCar] = cars;

console.log(firstCar);  // "BMW"
console.log(thirdCar);  // "Audi"