var furniture_BackTop = () => {
    let backButton = document.querySelector(".b-buttonback");

    if (document.body.scrollTop > 3000 || document.documentElement.scrollTop > 3000) {
        backButton.classList.add("is--active-back-button");
    } else {
        backButton.classList.remove("is--active-back-button");
    }

    backButton.addEventListener("click", () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })
};

window.onscroll = () => {
    furniture_BackTop();
}