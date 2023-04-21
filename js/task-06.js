// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// 1. Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// 2. Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// 3. Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", (e) => {
  e.currentTarget.value.length === Number(textInput.getAttribute("data-length"))
    ? (textInput.classList.add("valid"), textInput.classList.remove("invalid"))
    : (textInput.classList.add("invalid"), textInput.classList.remove("valid"));
});
