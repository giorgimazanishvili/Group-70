// 3) შექმენი ფუნქცია, რომელიც პარამეტრად იღებს ობიექტს:
// {
//   price: 100,
//   discount: 20
// }
// დესტრუქტურინგით გამოთვალე საბოლოო ფასი (price - discount).

function calculateFinalPrice({ price, discount = 0 }) {
  return price - discount;
}

const product = {
  price: 100,
  discount: 20
};

console.log(calculateFinalPrice(product)); // 80