const input = document.getElementById('myInput');

// აკრძალული ასოები
const forbiddenLetters = ['A', 'B', 'C'];

input.addEventListener('keydown', (event) => {
  const key = event.key;

  // აკრძალული ასოები ან Shift-ის გამოყენება
  if (forbiddenLetters.includes(key) || event.shiftKey) {
    event.preventDefault();      // აკრძალვა ჩაწერის
    input.classList.add('error'); // წითელი საზღვარი/ფონი
  }
});

input.addEventListener('keyup', () => {
  // კედარი/ფონი უბრუნდება ნორმას
  input.classList.remove('error');
});