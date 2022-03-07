{
    const navButton = document.querySelector(".js-nav__button");
    const body = document.querySelector(".body");
    const themeName = document.querySelector(".js-themeName");

    const init = () => {
        navButton.addEventListener("click", () => {
            body.classList.toggle("dark");

            themeName.innerText = body.classList.contains("dark") ? "białe" : "różowe";
        });
    };
    init();
}

