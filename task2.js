function isValidNumber(num) {
    if (!Number.isInteger(num)) return false;
    if (num <= 0) return false;
    return true
}

function twoNumbers() {
    const first = +prompt("введите первое валидное число");
    if (!isValidNumber(first)) {
        alert("Некорректный ввод!");
        return false
    }
    const second = +prompt("введите второе валидное число");
    if (!isValidNumber(second)) {
        alert("Некорректный ввод!");
        return false
    }
    alert(`Ответ: ${a + b}, ${a / b}.`)
}

twoNumbers()