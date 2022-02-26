let navButton = document.querySelector(".js-nav__button");
let body = document.querySelector(".body");
let themeName = document.querySelector(".js-themeName");

navButton.addEventListener("click", () => {
    body.classList.toggle("dark");

    themeName.innerText = body.classList.contains("dark") ? "białe" : "różowe";

});
