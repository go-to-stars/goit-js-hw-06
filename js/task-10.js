// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.
// 1. Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.
//  - Розміри найпершого <div> - 30px на 30px.
//  - Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
//  - Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
// 2. Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNamber = document.querySelector("input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const divBoxes = document.querySelector("div#boxes");

let amount = 0;

inputNamber.addEventListener("input", (e) => {
  amount = e.currentTarget.value;
});

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    let sizeElement = 30 + i * 10;
    divBoxes.insertAdjacentHTML(
      "beforeend",
      `<div style="width: ${sizeElement}px; height: ${sizeElement}px; background-color: ${getRandomHexColor()};"></div>`
    );
  }
}

function destroyBoxes() {
  divBoxes.innerHTML = "";
}

btnCreate.addEventListener("click", () => {
  createBoxes(amount);
});

btnDestroy.addEventListener("click", () => {
  destroyBoxes();
});
