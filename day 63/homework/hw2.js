const car = {
  speed: 100,  // მაგალითის მნიშვნელობა

  checkSpeed() {
    return this.speed > 120 ? "Too fast" : "Speed okay";
  }
};

// გამოყენება:
console.log(car.checkSpeed()); // Speed okay