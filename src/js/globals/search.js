//Function to open search bar of header
const furniture_OpenSearchBar = () => {
    let search = document.querySelector("#search");

    search.addEventListener("click", () => {
        document.querySelector(".b-header-container__search").classList.add("is--active-menu");
    });
};

//Function to close search bar of header
const furniture_CloseSearchBar = () => {
    document.addEventListener("keyup", (ev) => {
        switch (ev.key) {
            case "Escape":
                document.querySelector(".b-header-container__search").classList.remove("is--active-menu");
                break;
            default:
                break;
        }
    });
};

document.addEventListener("DOMContentLoaded", () => {
    furniture_OpenSearchBar();
    furniture_CloseSearchBar();
});