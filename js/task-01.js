// Напиши скрипт, який:
// 1. Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// 2. Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// 3. Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

console.log(
  "Number of categories: " + document.querySelectorAll(".item").length // кількість категорій в ul#categories
);

document.querySelectorAll(".item").forEach((element) => {
  console.log("Category: " + element.firstElementChild.textContent); // текст заголовку елемента (тегу <h2>)
  console.log("Elements: " + element.lastElementChild.children.length); // кількість елементів в категорії (усіх <li>)
});
