const greetingH1 = document.querySelector(".greetings");

const greeting = (name) => {
    greetingH1.innerText = `Hello, ${name}`;
    greetingH1.classList.remove("hidden");
    clock.classList.remove("hidden");
}
