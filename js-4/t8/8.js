"use strict";

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const operation = document.getElementById("operation");
const button = document.getElementById("start");
const result = document.getElementById("result");

button.addEventListener("click", function() {
    const firstNumber = Number(num1.value);
    const secondNumber = Number(num2.value);
    const selectedOperation = operation.value;

    let answer;

    switch (selectedOperation) {
        case "add":
            answer = firstNumber + secondNumber;
            break;

        case "sub":
            answer = firstNumber - secondNumber;
            break;

        case "multi":
            answer = firstNumber * secondNumber;
            break;

        case "div":
            if (secondNumber === 0) {
                answer = "Cannot divide by zero";
            } else {
                answer = firstNumber / secondNumber;
            }
            break;
    }

    result.textContent = answer;
});
