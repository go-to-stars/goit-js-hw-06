// Напиши скрипт, який для кожного елемента масиву ingredients:
// 1. Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// 2. Додасть назву інгредієнта як його текстовий вміст.
// 3. Додасть елементу клас item.
// 4. Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = ingredients.map((element) => {
  const listItem = document.createElement("li"); // cтворить окремий елемент <li>
  listItem.textContent = element; // додасть назву інгредієнта як його текстовий вміст
  listItem.classList.add("item"); // додасть елементу клас item.

  return listItem;
});

document.querySelector("#ingredients").prepend(...ingredientsList); // вставить усі <li> за одну операцію у список ul#ingredients
