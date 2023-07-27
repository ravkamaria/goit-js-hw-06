const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const items = ingredients.map((ingredient) => {
  let li = document.createElement("li");
  li.classList.add("item");
  li.textContent = ingredient;
  return li;
});

list.append(...items);
