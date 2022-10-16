const bodyRef = document.querySelector("body");
const spanRef = document.querySelector(".color");
const buttonRef = document.querySelector(".change-color");

buttonRef.addEventListener("click", (e) => {
  spanRef.textContent = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  bodyRef.style.backgroundColor = spanRef.textContent;
});
