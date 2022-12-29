const prelogin = document.querySelector(".pre-login");
const loggedIn = document.querySelector(".logged-in");
const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form__input");
const loginSubmit = document.querySelector(".login-form__submit");

const loggedInUsername = localStorage.getItem("username");

const handleLoginSubmit = (event) => {
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem("username",username);
    location.reload(true);
}

if (loggedInUsername !== null){
    prelogin.classList.add("hidden");
    loggedIn.classList.remove("hidden");    
    greeting_fx(loggedInUsername);

} else {
    loginForm.addEventListener("submit",handleLoginSubmit);
}
