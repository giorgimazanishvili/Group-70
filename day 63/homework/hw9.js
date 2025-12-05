const scoreboard = {
  scores: [10, 20, 15, 5],

  sumScores() {
    let sum = 0;
    let i = 0;

    while (i < this.scores.length) {
      sum += this.scores[i];
      i++;
    }

    return sum;
  }
};

// გამოყენება:
console.log(scoreboard.sumScores()); // 50
