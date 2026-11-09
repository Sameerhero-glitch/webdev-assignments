function even(array) {
    let evenNumbers = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenNumbers.push(array[i]);
        }
    }

    return evenNumbers;
}

let numbers = [2, 7, 4, 9, 6, 3];

let result = even(numbers);

console.log("Original array:", numbers);
console.log("Even numbers:", result);
