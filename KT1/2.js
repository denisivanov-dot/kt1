const temp = Number(prompt("Температура"));
const weather = prompt("Погода (clear, cloudy)");

if (!Number.isFinite(temp)) {
    throw new Error("Температура введена некорректно. Введите число.");
}

if (weather !== "clear" && weather !== "cloudy") {
    throw new Error("Погода задана некорректно. Введите: clear или cloudy");
}

let activity;

if (temp >= 25 && weather === "clear") {
    activity = "golf";
} else if ((temp >= 10 && temp <= 24) || weather === "cloudy") {
    activity = "bowling";
} else {
    activity = "hiking";
}

console.log(activity);