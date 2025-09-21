const a = Number(prompt('Первое значение'))
const b = Number(prompt('Второе значение'))
const sign = prompt('Действие (*, /, +, -)')

// Проверка валидности данных для чисел
if (!Number.isFinite(a) || !Number.isFinite(b)) {
    throw new Error("Одно из чисел некорректно")
}

let result

switch(sign){
    case "+":
        result = a + b
        break
    case "-":
        result = a - b
        break
    case "*":
        result = a * b
        break
    case "/":
        if(b === 0) {
            console.log("Делить на 0 нельзя!")
        } else {
            result = a / b
        }
        break
    default:
        throw new Error("Неизвестная операция")
}

// Выводим результат только если он вычислен
if (result !== undefined) {
    console.log(result)
}