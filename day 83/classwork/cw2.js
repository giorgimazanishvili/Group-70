// 2) მოცემულია ობიექტი:

// {
//   city: "Tbilisi",
//   country: "Georgia"
// }
// დესტრუქტურინგის გამოყენებით ამოიღე მხოლოდ city და გამოიტანეთ.

const location = {
  city: "Tbilisi",
  country: "Georgia"
};

const { city } = location;

console.log(city); // Tbilisi