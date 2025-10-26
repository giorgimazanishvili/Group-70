// --- ელემენტის შექმნა ---
const box = document.createElement('div');
box.style.width = '100px';
box.style.height = '100px';
box.style.backgroundColor = 'tomato';
box.style.position = 'absolute';
box.style.left = '50%';
box.style.transform = 'translateX(-50%)';
document.body.appendChild(box);

// --- მოძრაობის პარამეტრები ---
let y = 0;           // საწყისი პოზიცია
let direction = 1;   // 1 = ქვემოთ, -1 = ზემოთ
const speed = 2;     // სიჩქარე პიქსელებში

// --- ანიმაციის ფუნქცია ---
function moveBox() {
  y += direction * speed;

  // საზღვრების შემოწმება
  if (y >= window.innerHeight - box.offsetHeight || y <= 0) {
    direction *= -1;
  }

  box.style.top = y + 'px';

  requestAnimationFrame(moveBox); // უწყვეტი, გლუვი მოძრაობა
}

// --- ანიმაციის დაწყება ---
moveBox();
