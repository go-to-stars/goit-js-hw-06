// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const fontSizeControl = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

spanText.style.fontSize = `${fontSizeControl.value}px`; // ініціалізація значення розміру шрифта на старті скрипта (плавна зміна розміру)

fontSizeControl.addEventListener("input", (e) => {
  spanText.style.fontSize = `${e.currentTarget.value}px`;
});
