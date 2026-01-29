// feature-card ელემენტების წამოღება
const cards = document.getElementsByClassName("feature-card");

// სხვადასხვა ფონის ფერები
const backgrounds = [
  "linear-gradient(135deg, #ff9a9e, #fad0c4)",
  "linear-gradient(135deg, #a18cd1, #fbc2eb)",
  "linear-gradient(135deg, #84fab0, #8fd3f4)"
];

// თითოეულ div-ზე სტილების მინიჭება
for (let i = 0; i < cards.length; i++) {
  cards[i].style.background = backgrounds[i];
  cards[i].style.padding = "20px";
  cards[i].style.margin = "15px";
  cards[i].style.borderRadius = "12px";
  cards[i].style.fontSize = "18px";
  cards[i].style.textAlign = "center";
  cards[i].style.color = "#fff";
  cards[i].style.border = "2px solid rgba(255, 255, 255, 0.6)";
  cards[i].style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.25)";
}
