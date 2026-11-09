const numberOfRolls = Number(prompt("How many times should I roll the dice?"));

let sum = 0;

for (let i = 0; i < numberOfRolls; i++) {
    const diceResult = Math.floor(Math.random() * 6) + 1;
    sum = sum + diceResult;
}

document.querySelector("#target").innerHTML =
    "The sum of the dice rolls is: " + sum;