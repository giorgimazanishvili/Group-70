const input = document.getElementById('myInput');

input.addEventListener('keydown', (event) => {
  // აკრძალული ასოები და ციფრები
  const forbidden = ['a', 'b', 'c', '1', '2', '3'];

  const key = event.key.toLowerCase();

  // თუ აკრძალულია
  if (forbidden.includes(key)) {
    event.preventDefault(); // ჩაწერის აკრძალვა
    alert('ეს სიმბოლო აკრძალულია!');
  }
});