const items = [
  { name: "Book", price: 30, category: "Education" },
  { name: "Headphones", price: 80, category: "Electronics" },
  { name: "Bag", price: 50, category: "Fashion" }
];

// Destructuring
const [
  { name: firstName, price: firstPrice },
  { category: secondCategory },
  { name: thirdName }
] = items;

// შედეგის დაბეჭდვა HTML-ში
const outputDiv = document.getElementById("output");
outputDiv.innerHTML = `
  <p>First Object - Name: ${firstName}, Price: ${firstPrice}</p>
  <p>Second Object - Category: ${secondCategory}</p>
  <p>Third Object - Name: ${thirdName}</p>
`;

// დაბეჭდვა კონსოლში
console.log("First Object - Name:", firstName, "Price:", firstPrice);
console.log("Second Object - Category:", secondCategory);
console.log("Third Object - Name:", thirdName);