const input = document.getElementById("commentInput");
const text = document.getElementById("commentText");

input.addEventListener("input", () => {
    if (input.value === "") {
        text.innerHTML = "Start typing…";
    } else {
        text.innerHTML = input.value;
    }
});