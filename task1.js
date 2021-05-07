const number = +prompt("введите первое валидное число >0");
const index = +prompt("введите второе валидное число (2-36");

function isValidNumber(num) {
    if (!Number.isInteger(num)) return false;
    if (num <= 0) return false;
    return true
}

function isValidIndex(index) {
    if (!Number.isInteger(index)) return false;
    if (index < 2 && index > 36) return false;
    return true
}

function twoNumb(a, b) {
    if (isValidNumber(number) && isValidIndex(index)) {
        alert(a.toString(b));
        return true
    } else {
        alert("Некорректный ввод!")
    }
}

twoNumb(number, index)