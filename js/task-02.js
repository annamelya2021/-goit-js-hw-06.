const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsRef = document.querySelector("#ingredients");

const createMarkUp = ingredients.map((ingredient) => {
  const createLi = document.createElement("li");
  createLi.textContent = `${ingredient}`;
  createLi.classList.add("item");
  // console.log(createLi);
  return createLi;
});
// console.log(createMarkUp);
ingredientsRef.append(...createMarkUp);

// solution#2
// const markup = ingredients
//   .map((ingredient) => `<li class=".item">${ingredient}</li>`)
//   .join("");
// console.log(markup);
// ingredientsRef.innerHTML = markup;
