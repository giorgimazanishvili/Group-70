// 1

 const user = {
  name: "Giorgi",
  age: 20,
  isAdult: function () {
    if (this.age >= 18) {
      return "You are an adult";
    } else {
      return "You are not an adult";
    }
  }
};

console.log(user.isAdult()); // "You are an adult"
