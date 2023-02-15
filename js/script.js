const menuHumburger = document.querySelector(".menu__humburger");
const menuBody = document.querySelector(".menu__body");
const menuBox = document.querySelector(".menu__box");
const menuCloseButton = document.querySelector(".menu__close-button");

menuHumburger.addEventListener("click", () => {
    menuBox.classList.toggle("menu__box--open");
    body.classList.toggle("lock");
});

menuCloseButton.addEventListener("click", () => {
    menuBox.classList.remove("menu__box--open");
    body.classList.remove("lock");
});

