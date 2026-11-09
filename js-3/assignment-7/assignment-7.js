function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

let sides = Number(prompt("Enter the number of dice sides:"));

let target = document.getElementById("target");
let result;

do {
    result = rollDice(sides);

    let li = document.createElement("li");
    li.textContent = result;
    target.appendChild(li);

} while (result !== sides);
