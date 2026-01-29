const box = document.querySelector('.box');
const btn = document.getElementById('toggleBtn');

btn.addEventListener('click', () => {
  box.classList.toggle('highlight');
});
