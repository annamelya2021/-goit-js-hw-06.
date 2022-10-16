const decButtonRef = document.querySelector('[data-action="decrement"]');
const incButtonRef = document.querySelector('[data-action="increment"]');
const spanRef = document.querySelector("#value");

let counterValue = 0;

decButtonRef.addEventListener("click", () => {
  counterValue -= 1;
  spanRef.textContent = counterValue;
});

incButtonRef.addEventListener("click", () => {
  counterValue += 1;
  spanRef.textContent = counterValue;
});
