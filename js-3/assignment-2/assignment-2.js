
let number = Number(prompt("How many participants?"));
let names = [];

for (let i = 0; i < number; i++) {
    let name = prompt("Enter participant name:");
    names.push(name);
}

names.sort();

let target = document.getElementById("target");

for (let i = 0; i < names.length; i++) {
    let li = document.createElement("li");
    li.textContent = names[i];
    target.appendChild(li);
}
