//Function Slide
let arraySlides = document.querySelector(".b-container__slider-content__image").children;
let totalSlides = arraySlides.length;
let buttonNext = document.querySelector(".b-container__slider-content__image-mini-slider__controls-next");
let index = 0;

function next(direction) {
    if(direction == "next") {
        index++;

        if(index == totalSlides) {
            index = 0;
        }
    } 
    
    else {
        if(index === 0) {
            index = totalSlides - 1;
        } else {
            index--;
        }
    }

    for(i = 0; i < arraySlides.length; i++) {
        arraySlides[i].classList.remove("active");
    }

    arraySlides[index].classList.add("active");
}

buttonNext.addEventListener("click", () => {
    next("next");
});

//Function Mini Slide
let arrayMiniSlides = document.querySelectorAll(".b-container__slider-content__image-mini-slider__product-item");
let totalMiniSlides = arrayMiniSlides.length;
let btnNext = document.querySelector(".b-container__slider-content__image-mini-slider__controls-next");

function prox(direction) {
    if(direction == "next") {
        index++;

        if(index == totalMiniSlides) {
            index = 0;
        } 
    }

    else {
        if(index === 0) {
            index = totalMiniSlides - 1;
        } else {
            index--;
        }
    }

    for(j = 0; j < arrayMiniSlides.length; j++) {
        arrayMiniSlides[j].classList.remove("active");
    }

    arrayMiniSlides[index].classList.add("active");
}

btnNext.addEventListener("click", () => {
    prox("next");
});

//Function to open search bar
let search = document.querySelector("#search");

search.addEventListener("click", () => {
    document.querySelector(".b-header-container__search").classList.add("is--active-menu");
    document.querySelector(".b-header-container__institucional").classList.add("is--active-header");
});

//Function to animate label form newsletter
let label = document.querySelector(".b-form-group > label");
let input = document.querySelector(".b-form-group input[type=email]");

input.addEventListener("focusin", () => {
    label.classList.add("is--active-form");
});

//Function to open minicart in icon and buy button
let buttonBuy = document.querySelectorAll(".add-to-cart");
let buttonCart = document.querySelector("#cart");

buttonCart.addEventListener("click", () => {
    document.querySelector(".b-header-container__minicart").classList.add("is--active-minicart");
});

for(let i = 0; i < buttonBuy.length; i++) {
    buttonBuy[i].addEventListener("click", () => {
        document.querySelector(".b-header-container__minicart").classList.add("is--active-minicart");
    })
};

//Function to close minicart
let buttonClose = document.querySelector(".b-header-container__minicart-content__title-close");
let buttonContinue = document.querySelector(".b-header-container__minicart-content__continue a");

buttonClose.addEventListener("click", () => {
    document.querySelector(".b-header-container__minicart").classList.remove("is--active-minicart");
});

buttonContinue.addEventListener("click", () => {
    document.querySelector(".b-header-container__minicart").classList.remove("is--active-minicart");
});
