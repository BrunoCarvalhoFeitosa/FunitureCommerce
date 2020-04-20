//Function to open menu mobile
const funiture_OpenMenu = () => {
    let hamburguer = document.querySelector(".b-header-container__departments-hamburguer");
    let close = document.querySelector(".b-header-container__departments-menu nav .b-close h6"); 

    hamburguer.addEventListener("click", () => {
        document.querySelector(".b-header-container__departments-menu nav").classList.add("is--active-nav");
    });
    
    close.addEventListener("click", () => {
        document.querySelector(".b-header-container__departments-menu nav").classList.remove("is--active-nav");
    });
    
};

document.addEventListener("DOMContentLoaded", () => {
    funiture_OpenMenu();
});