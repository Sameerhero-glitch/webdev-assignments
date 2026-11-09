let numbers = [];

while (true) {
    let number = Number(prompt("Enter a number (0 to stop):"));

    if (number === 0) {
        break;
    }

    numbers.push(number);
}

numbers.sort((a, b) => b - a);

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
