function twoNumbers() {
    const first = parseInt(prompt("введите первое валидное число"));
    if (isNaN(first)) {
        console.log("Некорректный ввод!");
        return false;
    }
    const second = parseInt(prompt("введите второе валидное число"));
    if (isNaN(second) || second === 0) {
        console.log("Некорректный ввод!");
        return false;
    }
    console.log(`Ответ: ${first + second}, ${first / second}.`);
    return true
}

twoNumbers()