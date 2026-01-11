
    const input = document.getElementById("userInput");
    const display = document.getElementById("display");

    // ღონისძიება, რომელიც ხდება რეალურ დროში (input)
    input.addEventListener("input", function() {
      display.textContent = input.value;
    });
  
