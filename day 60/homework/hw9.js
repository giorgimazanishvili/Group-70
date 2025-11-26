const user = {
  username: "giorgi123",
  age: 20,
  

  greet: function() {
    return `გამარჯობა, მე ვარ ${this.username} და ჩემი ასაკი არის ${this.age}`;
  }
};


console.log(user.greet());  