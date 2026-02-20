// 2) მოცემულია ობიექტი:
// {
//   username: "admin",
//   password: "1234",
//   role: "user"
// }
// დესტრუქტურინგის გამოყენებით:
// username გადაარქვი user
// role-ს გაუწერე default მნიშვნელობა "guest" (თუ არ არსებობს)

const obj = {
  username: "admin",
  password: "1234",
  role: "user"
};

const { username: user, role = "guest" } = obj;

console.log(user); // "admin"
console.log(role); // "user"