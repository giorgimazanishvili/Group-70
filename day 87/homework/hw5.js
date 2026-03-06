// 5) შექმენი ობიექტი:
// const profile = {
//   username: "kocho",
//   followers: 120,
//   verified: false
// };
// შექმენი მისი ასლი spread-ით.
// შემდეგ შეცვალე ასლში followers → 500.
// შეამოწმე — ორიგინალი ობიექტი შეიცვალა თუ არა?

const profile = {
  username: "kocho",
  followers: 120,
  verified: false
};

// ობიექტის ასლის შექმნა Spread operator-ით
const profileCopy = {
  ...profile
};

// ასლში followers-ის შეცვლა
profileCopy.followers = 500;

console.log("Original:", profile);
console.log("Copy:", profileCopy);