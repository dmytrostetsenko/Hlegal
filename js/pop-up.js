const popupBody = document.querySelector(".popup");
const popupButton = document.querySelector(".popup__button");
const popupCloseButton = document.querySelector(".help__close-button");
const body = document.body;

popupButton.addEventListener("click", () => {
    popupBody.classList.toggle("popup--open");
    body.classList.toggle("lock");
});

popupCloseButton.addEventListener("click", () => {
    popupBody.classList.remove("popup--open");
    body.classList.remove("lock");
});