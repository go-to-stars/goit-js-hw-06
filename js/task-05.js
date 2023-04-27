// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous"

const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", (e) => {
  e.currentTarget.value.trim() === ""
    ? (textOutput.textContent = "Anonymous")
    : (textOutput.textContent = e.currentTarget.value);
});
