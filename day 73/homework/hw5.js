const info = document.getElementById("info");
const btn = document.getElementById("toggleBtn");

btn.addEventListener("click", () => {
    info.classList.toggle("hidden");
});