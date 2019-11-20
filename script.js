const singupModal = document.querySelector(".singup-form-wrapper");
const loginModal = document.querySelector(".login-form-wrapper");
const singupBtn = document.querySelector(".signin-btn");
const loginBtn = document.querySelector(".login-btn");
const loginX = document.querySelector(".login-x");
const singupX = document.querySelector(".singup-x");
const formContainer = document.querySelector(".form-container")

singupBtn.addEventListener("click", () => {
    singupModal.classList.add("display");
    formContainer.classList.add("disable");
});

loginBtn.addEventListener("click", () => {
    loginModal.classList.add("display");
    formContainer.classList.add("disable");
});

loginX.addEventListener("click", () => {
    loginModal.classList.remove("display");
    formContainer.classList.remove("disable");
})

singupX.addEventListener("click", () => {
    singupModal.classList.remove("display");
    formContainer.classList.remove("disable");
})
