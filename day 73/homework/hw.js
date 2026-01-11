const messageBox = document.getElementById("messageBox");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    messageBox.classList.toggle("active");

    if (messageBox.classList.contains("active")) {
        messageBox.innerHTML = "Message changed! 🎉";
    } else {
        messageBox.innerHTML = "Hello! This is the default message.";
    }
});
