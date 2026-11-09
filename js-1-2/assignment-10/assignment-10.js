
const dice = Number(prompt("Enter the number of dice:"));
const sum = Number(prompt("Enter the sum of the eyes:"));

let count = 0;
const repetitions = 10000;

for (let i = 0; i < repetitions; i++) {
    let total = 0;

    for (let j = 0; j < dice; j++) {
        total += Math.floor(Math.random() * 6) + 1;
    }

    if (total === sum) {
        count++;
    }
}

const probability = (count / repetitions) * 100;

document.querySelector("#target").innerHTML =
    "Probability to get sum " + sum + " with " + dice +
    " dice is " + probability.toFixed(2) + "%";
