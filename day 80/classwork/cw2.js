// 2) იგივე მასივში გამოიყენე forEach, რომ ყველა რიცხვი გაამრავლო 2-ზე და დაბეჭდო შედეგები.

// მასივი რიცხვებით
const numbers = [1, 2, 3, 4, 5];

// თითოეული რიცხვის გამრავლება 2-ზე და შედეგის დაბეჭდვა
numbers.forEach(function(number) {
  const doubled = number * 2;
  console.log(doubled);
});

numbers.forEach(number => console.log(number * 2));