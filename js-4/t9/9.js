"use strict";

const input = document.querySelector("input");
const button = document.querySelector("button");
const result = document.getElementById("result");

button.addEventListener("click", function() {
    const calculation = input.value;
    let answer;

    if (calculation.includes("+")) {
        const numbers = calculation.split("+");
        answer = Number(numbers[0]) + Number(numbers[1]);

    } else if (calculation.includes("-")) {
        const numbers = calculation.split("-");
        answer = Number(numbers[0]) - Number(numbers[1]);

    } else if (calculation.includes("*")) {
        const numbers = calculation.split("*");
        answer = Number(numbers[0]) * Number(numbers[1]);

    } else if (calculation.includes("/")) {
        const numbers = calculation.split("/");
        answer = Number(numbers[0]) / Number(numbers[1]);
    }

    result.textContent = answer;
});
