// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.
// 1. Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// 2. Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// 3. Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;

const value = document.querySelector("#value");

const subtractBtn = document.querySelector("button[data-action=decrement]");

// оновлення інтерфейсу новим значенням змінної counterValue по події "click -"
subtractBtn.addEventListener("click", () => {
  value.innerHTML = `<span id="value">${(counterValue -= 1)}</span>`;
});

const addBtn = document.querySelector("button[data-action=increment]");

// оновлення інтерфейсу новим значенням змінної counterValue по події "click +"
addBtn.addEventListener("click", () => {
  value.innerHTML = `<span id="value">${(counterValue += 1)}</span>`;
});
