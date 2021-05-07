const first = +prompt("введите первое валидное число");
const second = +prompt("введите второе валидное число");

function isValidNumber(num) {
    if (!Number.isInteger(num)) return false;
    if (num <= 0) return false;
    return true
}

function twoNumbers(a,b) {
    if (!isValidNumber(a)) {
        alert("Некорректный ввод!");
        return false
    } else if (!isValidNumber(b)) {
        alert("Некорректный ввод!");
        return false
    } else {
        alert(`Ответ: ${a+b}, ${a/b}.`)
    }
}

twoNumbers(first, second);