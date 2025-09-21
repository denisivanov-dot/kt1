const price = Number(prompt( "Введите сумму (в руб.)"))
const range = prompt('Введите период (month, week или day)')

if(!Number.isFinite(price) || price <= 0){
    throw new Error("Доход введен некорректно")
}

if (range !== "month" && range !== "week" && range !== "day") {
    throw new Error("Период введен некорректно. Введите: month, week или day");
}

let rangeRussian;
if (range === "month") rangeRussian = "месяц";
else if (range === "week") rangeRussian = "неделю";
else if (range === "day") rangeRussian = "день";

const formattedPrice = price.toLocaleString('ru-RU') +'P';
const result = `${formattedPrice} в ${rangeRussian}`; 
console.log(result);