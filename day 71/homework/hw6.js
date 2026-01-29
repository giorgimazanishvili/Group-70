const quizDiv = document.getElementById("quiz");

quizDiv.innerHTML = `
  <h3>რომელია JavaScript-ის მონაცემთა ტიპი?</h3>
  <button onclick="checkAnswer(this, true)">string</button>
  <button onclick="checkAnswer(this, false)">loop</button>
  <button onclick="checkAnswer(this, false)">style</button>
`;

function checkAnswer(button, isCorrect) {
  if (isCorrect) {
    button.classList.add("correct");
  } else {
    button.classList.add("wrong");
  }
}