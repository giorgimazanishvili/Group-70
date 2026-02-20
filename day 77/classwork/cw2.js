// 1. შექმენი მასივი 5 კერძით
let dishes = ["ხინკალი", "ბორში", "ხაჭაპური", "ყულეფი", "ლობიო"];

// 2. ფუნქცია მასივის ჩვენებისთვის
function showDishes() {
  document.getElementById("output").innerHTML = dishes.join(", ");
}

// 3. თავდაპირველად ჩვენება
showDishes();

// 4. ღილაკის დაჭერით პირველი ელემენტის წაშლა
document.getElementById("removeBtn").addEventListener("click", () => {
  dishes.shift(); // პირველი ელემენტის წაშლა
  showDishes();   // განახლება გვერდზე
});
