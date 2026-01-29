const box = document.getElementById("box");

box.innerHTML = `
  <p>ეს არის ტექსტი</p>
  <button id="bgBtn">ფონის შეცვლა</button>
  <button id="textBtn">ტექსტის ფერის შეცვლა</button>
`;

document.getElementById("bgBtn").addEventListener("click", () => {
  box.classList.toggle("bg-change");
});

document.getElementById("textBtn").addEventListener("click", () => {
  box.classList.toggle("text-change");
});