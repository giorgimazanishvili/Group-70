const input = document.getElementById('myInput');
const counter = document.getElementById('counter');

input.addEventListener('keyup', () => {
  const length = input.value.length;

  counter.textContent = `You typed ${length} characters`;

  // თუ 5 ან მეტი სიმბოლოა
  if (length >= 5) {
    counter.style.color = 'red';
  } else {
    counter.style.color = 'black';
  }
});