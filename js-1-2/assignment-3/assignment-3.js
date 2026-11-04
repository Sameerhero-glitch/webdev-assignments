
const num1 = Number(prompt("Enter the first number:"));
const num2 = Number(prompt("Enter the second number:"));
const num3 = Number(prompt("Enter the third number:"));

const sum = num1 + num2 + num3;
const product = num1 * num2 * num3;
const average = (num1 + num2 + num3) / 3;

document.querySelector("#target").innerHTML =
  "Sum: " + sum + "<br>" +
  "Product: " + product + "<br>" +
  "Average: " + average;
