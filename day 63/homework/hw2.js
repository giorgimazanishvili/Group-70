const car = {
  speed: 120,

  checkspeed() {
    if (this.speed >= 130) {
      return "შენი შიჩქარე მეტია"
    } else {
      return "შენი შიჩქარე ნაკლებია"
    }
  }
}

console.log (car.checkspeed())