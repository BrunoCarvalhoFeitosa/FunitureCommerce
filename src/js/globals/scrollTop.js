//Function to back top of page
const furniture_BackTop = () => {
    let backButton = document.querySelector(".b-buttonback");

    if (document.body.scrollTop > 4000 || document.documentElement.scrollTop > 4000) {
        backButton.classList.add("is--active-back-button");
    } else {
        backButton.classList.remove("is--active-back-button");
    }

    backButton.addEventListener("click", () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })
};

//Function to execute back to top in scroll of page
window.onscroll = () => {
    furniture_BackTop();
}