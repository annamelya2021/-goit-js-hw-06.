const inputRef = document.querySelector("#font-size-control");
const spanRef = document.querySelector("#text");
spanRef.style.fontSize = `${inputRef.value}px`;
// console.log(inputRef.value);
const fontSize = (event) => {
  console.log(inputRef.value);
  spanRef.style.fontSize = `${inputRef.value}px`;
};
inputRef.addEventListener("input", fontSize);
