const refs = {
  input: document.querySelector("#name-input"),
  nameSpan: document.querySelector("#name-output"),
};
const updateInputName = (event) => {
  refs.input.value === ""
    ? (refs.nameSpan.textContent = "Anonymous")
    : (refs.nameSpan.textContent = event.currentTarget.value);
};

refs.input.addEventListener("input", updateInputName);
