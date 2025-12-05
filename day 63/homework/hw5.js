const repeater = {
  text: "Hello!",
  count: 5,

  repeatText() {
    let i = 0;
    while (i < this.count) {
      console.log(this.text);
      i++;
    }
  }
};

// გამოყენება:
repeater.repeatText();
// გამოიტანს:

// 5 Hello!
