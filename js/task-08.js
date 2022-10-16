const formRef = document.querySelector(".login-form");
function onHandleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  email.value === "" || password.value === ""
    ? alert("Все поля должны форм быть заполнены")
    : console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}

formRef.addEventListener("submit", onHandleSubmit);
