const cart = document.getElementById("cart");
const addBtn = document.getElementById("addBtn");

let itemCount = 1;

addBtn.addEventListener("click", () => {
  const item = document.createElement("div");
  item.innerHTML = `ნივთი ${itemCount}`;
  item.classList.add("item", "new-item");

  cart.appendChild(item);
  itemCount++;
});