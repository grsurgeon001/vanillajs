const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form__input");
const loginSubmit = document.querySelector(".login-form__submit");



const handleLoginSubmit = (event) => {
    event.preventDefault();
    const name = loginInput.value;
    localStorage.setItem("name",name);
    loginForm.classList.add("hidden");
    greeting(name);
}

loginForm.addEventListener("submit",handleLoginSubmit);
