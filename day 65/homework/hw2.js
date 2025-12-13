// მეგობრების მასივი
let friends = ["Ana", "Giorgi", "Nika", "Mariam", "Luka"];

// ვამატებთ ახალ მეგობარს
friends.push("Sandro");

// ასევე შეგვიძლია დასაწყისშიც დავამატოთ
friends.unshift("Tako");

// წავშალოთ ბოლო ელემენტი
friends.pop();

// წავშალოთ პირველი ელემენტი
friends.shift();

// კონკრეტული ელემენტის წვდომა
console.log("პირველი მეგობარი:", friends[0]);

// მასივის სიგრძე
console.log("სულ მეგობრები:", friends.length);

// მთლიანი მასივის გამოტანა
console.log(friends);
