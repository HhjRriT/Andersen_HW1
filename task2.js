function twoNumbers() {
    const first = parseInt(prompt("введите первое валидное число"));
    if (isNaN(first)) {
        alert("Некорректный ввод!");
        return false;
    }
    const second = parseInt(prompt("введите второе валидное число"));
    if (isNaN(second) || second === 0) {
        alert("Некорректный ввод!");
        return false;
    }
    alert(`Ответ: ${first + second}, ${first / second}.`);
    return true
}

twoNumbers()