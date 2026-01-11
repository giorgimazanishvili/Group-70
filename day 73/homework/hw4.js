const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", () => {
    
    const newParagraph = document.createElement("p");

    
    newParagraph.innerHTML = "New paragraph created";

    
    document.body.appendChild(newParagraph);
});
