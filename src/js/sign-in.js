let signUpButton = document.querySelector("#signUp");
let signInButton = document.querySelector("#signIn");
let container = document.querySelector("#container");

//Function to animate panel sign up
const funiture_AnimationSignUp = () => {
    signUpButton.addEventListener("click", () => {
        container.classList.add("is--right-panel-active");
    });
};

//Function to animate panel sign in
const funiture_AnimationSignIn = () => {
    signInButton.addEventListener("click", () => {
        container.classList.remove("is--right-panel-active");
    });
};

//Function to execute in batch all other function in load of page
document.addEventListener("DOMContentLoaded", () => {
    funiture_AnimationSignUp();
    funiture_AnimationSignIn();
});