// ყველა li ელემენტის წამოღება
const listItems = document.getElementsByTagName("li");

// ყველა li-ზე საერთო სტილები
for (let i = 0; i < listItems.length; i++) {
  listItems[i].style.padding = "12px";
  listItems[i].style.marginBottom = "8px";
  listItems[i].style.backgroundColor = "#ecf0f1";
  listItems[i].style.borderRadius = "8px";
  listItems[i].style.listStyleType = "none";
  listItems[i].style.textTransform = "uppercase";
}

// პირველი li-ის ტექსტის ფერი
listItems[0].style.color = "red";

// ბოლო li-ის ტექსტის ფერი
listItems[listItems.length - 1].style.color = "green";
