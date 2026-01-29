 const text = document.getElementById('text');
const showBtn = document.getElementById('showBtn');
const hideBtn = document.getElementById('hideBtn');

showBtn.addEventListener('click', () => {
  text.classList.remove('hidden'); // ტექსტის ჩვენება
});

hideBtn.addEventListener('click', () => {
  text.classList.add('hidden'); // ტექსტის დამალვა
});
