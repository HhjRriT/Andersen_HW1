const number = prompt("введите первое валидное число");
const index = prompt("введите второе валидное число (2-36");

function isValidNumber(num) {
    return !isNaN(num) && num <= Number.MAX_SAFE_INTEGER && num >= Number.MIN_SAFE_INTEGER
}

function isValidIndex(index) {
    return !isNaN(index) && ((index >= 2 && index <= 36))
}

function twoNumb(a, b) {
    const parsedA = parseInt(a);
    const parsedB = parseInt(b);
    if (isValidNumber(parsedA) && isValidIndex(parsedB)) {
        console.log((parsedA >>> 0).toString(parsedB));
    } else {
        console.log("Некорректный ввод!")
    }
}

twoNumb(number, index)