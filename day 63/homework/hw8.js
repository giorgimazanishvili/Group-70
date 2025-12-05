const day = {
  hour: 14, // მაგალითი: 14 საათი

  getTimeOfDay() {
    if (this.hour >= 6 && this.hour < 12) {
      return "Morning";
    } else if (this.hour >= 12 && this.hour < 18) {
      return "Afternoon";
    } else if (this.hour >= 18 && this.hour < 24) {
      return "Evening";
    } else {
      return "Night";
    }
  }
};

// გამოყენება:
console.log(day.getTimeOfDay()); // Afternoon
