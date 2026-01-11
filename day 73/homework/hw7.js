const form = document.getElementById("contactForm");

form.addEventListener("submit", (e) => {
    // გვერდის გადატვირთვის შეჩერება
    e.preventDefault();

    alert("Message sent successfully");
});