{
    const navButton = document.querySelector(".js-nav__button");
    const body = document.querySelector(".body");

    navButton.addEventListener("click", () => {
        body.classList.toggle("dark");

    });
    const init = () => {
        const themeName = document.querySelector(".js-themeName");
        themeName.innerText = body.classList.contains("dark") ? "białe" : "różowe";
    };
    init();
}

