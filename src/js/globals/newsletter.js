//Function to animate label form newsletter
const furniture_Newsletter = () => {
    let label = document.querySelector(".b-form-group > label");
    let input = document.querySelector(".b-form-group input[type=email]");

    input.addEventListener("focusin", () => {
        label.classList.add("is--active-form");
    });
};

document.addEventListener("DOMContentLoaded", () => {
    furniture_Newsletter();
});