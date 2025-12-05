// 2

const car = {
  brand: "BMW",
  speed: 130,
  checkSpeed: function () {
    if (this.speed > 120) {
      return "Too fast!";
    } else {
      return "Speed is okay";
    }
  }
};

console.log(car.checkSpeed()); // "Too fast!"
