const box = document.getElementById("box");

document.getElementById("addBtn").onclick = function () {
    box.classList.add("red");
};

document.getElementById("removeBtn").onclick = function () {
    box.classList.remove("red");
};