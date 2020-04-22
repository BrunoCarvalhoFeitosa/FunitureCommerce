//Function to open search bar of header
const funiture_OpenSearchBar = () => {
    let search = document.querySelector("#search");

    search.addEventListener("click", () => {
        document.querySelector(".b-header-container__search").classList.add("is--active-search");
    });
};

//Function to close search bar of header
const funiture_CloseSearchBar = () => {
    document.addEventListener("keyup", (ev) => {
        switch (ev.key) {
            case "Escape":
                document.querySelector(".b-header-container__search").classList.remove("is--active-search");
                break;
            default:
                break;
        }
    });
};

//Function to execute in batch all other function in load of page
document.addEventListener("DOMContentLoaded", () => {
    funiture_OpenSearchBar();
    funiture_CloseSearchBar();
});