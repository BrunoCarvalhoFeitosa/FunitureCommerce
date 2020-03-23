//Function to pass slide images from carousel home
const furniture_CarouselHome = () => {
    let arraySlides = document.querySelector(".b-container__slider-content__image").children;
    let totalSlides = arraySlides.length;
    let buttonNext = document.querySelector(".b-container__slider-content__image-mini-slider__controls-next");
    let imgNext = document.querySelector(".b-container__slider-content__image-mini-slider__product-overlay");
    let index = 0;

    function next(direction) {
        if (direction == "next") {
            index++;

            if (index == totalSlides) {
                index = 0;
            }
        } else {
            if (index === 0) {
                index = totalSlides - 1;
            } else {
                index--;
            }
        }

        for (i = 0; i < arraySlides.length; i++) {
            arraySlides[i].classList.remove("active");
        }

        arraySlides[index].classList.add("active");
    }

    buttonNext.addEventListener("click", () => {
        next("next");
    });

    imgNext.addEventListener("click", () => {
        next("next");
    });
};

//Function to pass slide images from minicarousel home
const furniture_MiniCarouselHome = () => {
    let arrayMiniSlides = document.querySelectorAll(".b-container__slider-content__image-mini-slider__product-item");
    let totalMiniSlides = arrayMiniSlides.length;
    let index = 0;

    let btnNext = document.querySelector(".b-container__slider-content__image-mini-slider__controls-next");
    let imgNext = document.querySelector(".b-container__slider-content__image-mini-slider__product-overlay");

    function prox(direction) {
        if (direction == "next") {
            index++;

            if (index == totalMiniSlides) {
                index = 0;
            }
        } else {
            if (index === 0) {
                index = totalMiniSlides - 1;
            } else {
                index--;
            }
        }

        for (j = 0; j < arrayMiniSlides.length; j++) {
            arrayMiniSlides[j].classList.remove("active");
        }

        arrayMiniSlides[index].classList.add("active");
    }

    btnNext.addEventListener("click", () => {
        prox("next");
    });

    imgNext.addEventListener("click", () => {
        prox("next");
    });
};

document.addEventListener("DOMContentLoaded", () => {
    furniture_CarouselHome();
    furniture_MiniCarouselHome();
});