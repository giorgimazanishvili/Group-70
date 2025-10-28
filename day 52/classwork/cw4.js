
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    let operator = prompt("Enter an operator (+, -, *, /, %):");

    switch (operator) {
        case "+":
            console.log("Result: " + (num1 + num2));
            break;
        case "-":
            console.log("Result: " + (num1 - num2));
            break;
        case "*":
            console.log("Result: " + (num1 * num2));
            break;
        case "/":
            console.log("Result: " + (num1 / num2));
            break;
        case "%":
            console.log("Result: " + (num1 % num2));
            break;
        default:
            console.log("Invalid operator.");
    }