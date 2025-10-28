  let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));

    function checkNumber(num) {
        if (num > 0) {
            return "positive";
        } else if (num < 0) {
            return "negative";
        } else {
            return "zero";
        }
    }
alert("The first number is " + checkNumber(num1) + ".");

alert("The second number is " + checkNumber(num2) + ".");