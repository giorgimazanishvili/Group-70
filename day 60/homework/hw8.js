// 1) Dot notation (წერტილით გამოძახება)
user.username

// 2) Bracket notation (ფრჩხილებით გამოძახება)
user["username"]

// 3) Destructuring (დესტრუქტურიზაცია)
const { username } = user;

// 4) Optional chaining (უსაფრთხო გამოძახება)
user?.username

// 5) Variables as keys (ცვლადის გამოყენება გასაღებად — მხოლოდ bracket notation მუშაობს)
let key = "username";
user[key];
