
const startYear = Number(prompt("Enter the start year:"));
const endYear = Number(prompt("Enter the end year:"));

const target = document.querySelector("#target");

for (let year = startYear; year <= endYear; year++) {
    if (year % 400 === 0) {
        const li = document.createElement("li");
        li.textContent = year;
        target.appendChild(li);
    } else if (year % 100 === 0) {
        // Not a leap year
    } else if (year % 4 === 0) {
        const li = document.createElement("li");
        li.textContent = year;
        target.appendChild(li);
    }
}
