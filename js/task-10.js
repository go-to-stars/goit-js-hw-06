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

// Варіант 1 ----------------------------------------------
// function createBoxes(amount) {
//   for (let i = 0; i < amount; i++) {
//     let sizeElement = 30 + i * 10;
//     divBoxes.insertAdjacentHTML(
//       "beforeend",
//       `<div style="width: ${sizeElement}px; height: ${sizeElement}px; background-color: ${getRandomHexColor()};"></div>`
//     );
//   }
// }

// function destroyBoxes() {
//   divBoxes.innerHTML = "";
// }

// btnCreate.addEventListener("click", () => {
//   createBoxes(amount);
// });

// btnDestroy.addEventListener("click", () => {
//   destroyBoxes();
// });

// Варіант 2 (рекомендація ментора) ----------------------------------------------
// функція створення "div"
function createBoxes(amount) {
  let summaryLine = "";
  for (let i = 0; i < amount; i += Number(inputNamber.step)) {
    let sizeElement = 30 + i * 10;
    summaryLine += `<div style="width: ${sizeElement}px; height: ${sizeElement}px; background-color: ${getRandomHexColor()};"></div>`;
  }
  divBoxes.insertAdjacentHTML("beforeend", summaryLine); // додати в DOM за одну операцію
}

// функція видалення "div" та очищення вводу
function destroyBoxes() {
  inputNamber.value = ""; // очищення "input"
  divBoxes.innerHTML = ""; // очищення вмісту "div#boxes"
}

// виклик по події "click" функції створення "div", при умові, що значення "input" в діапазоні між мін і макс значеннями
btnCreate.addEventListener("click", () => {
  if (
    Number(inputNamber.min) <= Number(inputNamber.value) &&
    Number(inputNamber.value) <= Number(inputNamber.max)
  ) {
    createBoxes(amount);
  }
});

// виклик по події "click" функції видалення "div"
btnDestroy.addEventListener("click", () => {
  destroyBoxes();
});
