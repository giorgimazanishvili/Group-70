const box = document.getElementById('box');

/* წინასწარ ჩაწერილი ფერების სია */
const colors = ['purple', 'teal', 'brown', 'blue', 'green'];

let currentIndex = 0;

/* როცა მაუსი გადის div-დან */
box.addEventListener('mouseleave', () => {
  box.style.backgroundColor = colors[currentIndex];

  /* გადავდივართ შემდეგ ფერზე */
  currentIndex++;

  /* თუ სიის ბოლო მივაღწიეთ, თავიდან ვიწყებთ */
  if (currentIndex >= colors.length) {
    currentIndex = 0;
  }
});