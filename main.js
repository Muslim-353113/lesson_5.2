//1.1 — Конвертация температуры
function rtTemperature(celsius, toFahrenheit) {
    if (toFahrenheit === true) {
        return (celsius * 9 / 5) + 32;
    } else {
        return (celsius - 32) * 5 / 9;
    }
}

//Тесты
console.log(rtTemperature(0, true));    // 32
console.log(rtTemperature(100, true));  // 212
console.log(rtTemperature(32, false));  // 0
console.log(rtTemperature(212, false)); // 100


//1.2 — Проверка пароля
function validatePassword(password) {
    const hasLength = password.length > 8;
    const hasLetter = /[a-zA-Zа-яА-Я]/.test(password);
    const hasDigit = /\d/.test(password);

    return hasLength && hasLetter && hasDigit;
}

//Тесты
console.log(validatePassword("abc123"));       // false
console.log(validatePassword("password1"));     // true
console.log(validatePassword("123456789"));     // false
console.log(validatePassword("Hello12345"));    // true


//1.3 — Калькулятор
function calculate(a, b, operation) {
    switch (operation) {
        case "+":
            return a + b;

        case "-":
            return a - b;

        case "*":
            return a * b;

        case "/":
            if (b === 0) {
                return "Ошибка: деление на ноль";
            }
            return a / b;

        default:
            return "Ошибка: неизвестная операция";
    }
}

//Тесты
console.log(calculate(10, 5, "+")); // 15
console.log(calculate(10, 5, "-")); // 5
console.log(calculate(10, 5, "*")); // 50
console.log(calculate(10, 5, "/")); // 2
console.log(calculate(10, 0, "/")); // Ошибка: деление на ноль

//2
function calculate(a, b, operation) {
    switch (operation) {
        case "+":
            return a + b;

        case "-":
            return a - b;

        case "*":
            return a * b;

        case "/":
            if (b === 0) {
                return "Ошибка: деление на ноль";
            }
            return a / b;

        default:
            return "Ошибка: неизвестная операция";
    }
}

//все кнопки операций
const buttons = document.querySelectorAll(".operation-btn");

//Добавляем обработчик клика каждой кнопке
buttons.forEach(function(button) {
    button.addEventListener("click", function() {

        const num1 = Number(document.getElementById("num1").value);
        const num2 = Number(document.getElementById("num2").value);
        const operation = button.dataset.operation;

        const result = calculate(num1, num2, operation);

        document.getElementById("result").textContent =
            "Результат: " + result;
    });
});