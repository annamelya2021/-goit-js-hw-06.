const inputRef = document.querySelector("#validation-input");

const onGetInputName = (event) => {
  if (inputRef.value.length === Number(inputRef.dataset.length)) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
    // inputRef.style.borderColor("#4caf50");
  } else {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
    // inputRef.style.borderColor("#f44336");
  }
};
inputRef.addEventListener("blur", onGetInputName);
