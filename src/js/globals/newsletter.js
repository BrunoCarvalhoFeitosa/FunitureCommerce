//Function to animate label form newsletter
const funiture_Newsletter = () => {
    let label = document.querySelector(".b-form-group > label");
    let input = document.querySelector(".b-form-group input[type=email]");

    input.addEventListener("focusin", () => {
        label.classList.add("is--active-form");
    });
};

//Function to execute in batch all other function in load of page
document.addEventListener("DOMContentLoaded", () => {
    funiture_Newsletter();
});