const target = document.querySelector("#target");

if (confirm("Should I calculate the square root?")) {

    const number = Number(prompt("Enter a number:"));

    if (number < 0) {
        target.innerHTML = "The square root of a negative number is not defined.";
    } else {
        target.innerHTML = "The square root is " + Math.sqrt(number);
    }

} else {
    target.innerHTML = "The square root is not calculated.";
}
