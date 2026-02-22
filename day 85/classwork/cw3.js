// ფუნქცია, რომელიც იღებს ობიექტს და აკეთებს nested destructuring-ს
function printUser({ name, address: { city = "Unknown", zip = "0000" } = {} }) {
  const outputDiv = document.getElementById("output");

  const userInfo = `
    <p>Name: ${name}</p>
    <p>City: ${city}</p>
    <p>Zip: ${zip}</p>
    <hr>
  `;

  outputDiv.innerHTML += userInfo;

  // დაბეჭდვა კონსოლში
  console.log("Name:", name);
  console.log("City:", city);
  console.log("Zip:", zip);
}

// მაგალითი 1: address არსებობს
const user1 = {
  name: "Nika",
  address: {
    city: "Tbilisi",
    zip: "0101"
  }
};

printUser(user1);

// მაგალითი 2: address არ არსებობს
const user2 = {
  name: "Levan"
};

printUser(user2);