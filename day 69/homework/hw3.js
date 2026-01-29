// span ელემენტების წამოღება
const spans = document.getElementsByTagName("span");

// ყველა span-ზე ერთიანი სტილების მინიჭება
for (let i = 0; i < spans.length; i++) {
  spans[i].style.fontSize = "18px";
  spans[i].style.color = "#2c3e50";
  spans[i].style.fontWeight = "600";
  spans[i].style.letterSpacing = "1.5px";
}
