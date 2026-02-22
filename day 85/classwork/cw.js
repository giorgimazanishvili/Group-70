const colors = ["red", "green", "blue", "yellow", "black"];

// Destructuring
const [firstColor, secondColor, ...rest] = colors;

// დაბეჭდვა გვერდზე
const outputDiv = document.getElementById("output");
outputDiv.innerHTML = `
  <p>First Color: ${firstColor}</p>
  <p>Second Color: ${secondColor}</p>
  <p>Rest Colors: ${rest.join(", ")}</p>
`;

// დაბეჭდვა კონსოლში
console.log("First Color:", firstColor);
console.log("Second Color:", secondColor);
console.log("Rest Colors:", rest);