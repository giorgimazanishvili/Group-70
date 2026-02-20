// 4) შექმენი მასივი პროდუქტებით (მაგალითად: პური, რძე, ყველი) და forEach-ით დაბეჭდე თითოეული პროდუქტი ნომრებით (1. პური, 2. რძე და ა.შ.).

// მასივი პროდუქტებით
const products = ["პური", "რძე", "ყველი"];

// forEach-ით თითოეული პროდუქტის დაბეჭდვა ნომრებით
products.forEach(function(product, index) {
  console.log(`${index + 1}. ${product}`);
});

products.forEach((product, index) => console.log(`${index + 1}. ${product}`));