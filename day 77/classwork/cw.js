// 1. შექმენი მასივი სამი სპორტის სახეობით
let sports = ["ფეხბურთი", "ბასკეტბოლი", "ტენისი"];

// 2. ელემენტების ჩვენება ფუნქციით
function showSports() {
  document.getElementById("output").innerHTML = sports.join(", ");
}

// 3. თავდაპირველად ჩვენება
showSports();

// 4. ღილაკის დაჭერით ახალი სპორტის დამატება დასაწყისში
document.getElementById("addBtn").addEventListener("click", () => {
  sports.unshift("ვოლეიბოლი"); // ახალი სპორტი დასაწყისში
  showSports(); // განახლება გვერდზე
});