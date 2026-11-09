
function concat(array) {
    let result = "";

    for (let i = 0; i < array.length; i++) {
        result += array[i];
    }

    return result;
}

let names = ["Johnny", "DeeDee", "Joey", "Marky"];

let target = document.getElementById("target");
target.textContent = concat(names);
