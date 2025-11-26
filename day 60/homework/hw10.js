// ვქმნით ობიექტს Neymar‑ზე
const neymar = {
  name: "Neymar Jr.",
  nationality: "Brazil",      
  previousClubs: ["Santos FC", "FC Barcelona", "Paris Saint‑Germain", "Al‑Hilal"],  
  birthYear: 1992,           
  

  shouldPlayWorldCup2026: function() {
 
    return "და ჩემი აზრით — თუ ფორმას დაიბრუნებს და ჯანმრთელობა შეინარჩუნა, კარგია 2026‑ზე ითამაშოს.";
  }
  
};

console.log("Name:", neymar.name);
console.log("Nationality:", neymar.nationality);
console.log("Current Club:", neymar.currentClub);
console.log("Previous Clubs:", neymar.previousClubs);
console.log("Birth Year:", neymar.birthYear);
console.log("Opinion about 2026 World Cup:", neymar.shouldPlayWorldCup2026());