// Calculator ობიექტი
const calculator = {
  // ორი რიცხვის შეკრება
  add: function(a, b) {
    return a + b;
  },

  // ორი რიცხვის გამოკლება
  subtract: function(a, b) {
    return a - b;
  },

  // ორი რიცხვის გაყოფა
  divide: function(a, b) {
    if(b === 0) {
      return "არ შეიძლება გაყოფა ნულზე!";
    }
    return a / b;
  },

  // ორი რიცხვის გამრავლება
  multiply: function(a, b) {
    return a * b;
  },

  // ნაშთიანი გაყოფა
  modulus: function(a, b) {
    if(b === 0) {
      return "არ შეიძლება გაყოფა ნულზე!";
    }
    return a % b;
  },

  // ორი რიცხვის შედარება, რომელია მეტი
  max: function(a, b) {
    if(a > b) return a;
    else if(b > a) return b;
    else return "ორივე რიცხვი ერთნაირია";
  }
};

// გამოყენების მაგალითები
console.log("დამატება:", calculator.add(10, 5));           
