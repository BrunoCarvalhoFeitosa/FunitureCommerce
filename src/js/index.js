//Function to pass slide images from carousel home
const funiture_CarouselHome = () => {
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
const funiture_MiniCarouselHome = () => {
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

//Function to animate in timeline all page
const funiture_AnimationTimeline = () => {
    anime.timeline({
        easing: 'easeOutExpo'
    }).add({
        targets: '.b-author a',
        opacity: [0, 1],
        translateY: [-80, 0],
        offset: '-=450',
    }).add({
        targets: '.b-header-container__institucional nav ul li svg',
        opacity: [0, 1],
        translateY: [-80, 0],
        delay: (el, i) => 1300 * i,
        offset: '-=450',
    }).add({
        targets: '.b-header-container__departments-brand a',
        translateY: [-100, 0],
    }).add({
        targets: 'nav ul li',
        opacity: [0, 1],
        translateY: [-40, 0],
        delay: 5000,
        offset: '-=450',
        delay: (el, i) => 325 * i,
    }).add({
        targets: '.b-header-container__departments-hamburguer',
        opacity: [0, 1],
        translateX: [100, 0],
        offset: '-=450',
    }).add({
        targets: '.b-container__slider-content__text-article h2',
        opacity: [0, 1],
        translateY: [-200, 0],
        delay: 450,
    }).add({
        targets: '.b-container__slider-content__text-article h3',
        opacity: [0, 1],
        translateX: [200, 0],
    }).add({
        targets: '.b-container__slider-content__image-mini-slider',
        opacity: [0, 1],
        translateY: [150, 0],
        delay: (el, i) => 700 * i,
        offset: '-=300',
    }).add({
        targets: '.b-container__slider-content__image-item img',
        opacity: [0, 1],
        translateY: [150, 0],
        delay: (el, i) => 700 * i,
        offset: '-=300',
    }).add({
        targets: '.b-container__promotion-cards h2',
        opacity: [0, 1],
        translateX: [-100, 0],
        offset: '-=150'
    }).add({
        targets: '.b-container__promotion-cards-container__about',
        opacity: [0, 1],
        translateX: [-100, 0],
        offset: '-=150'
    }).add({
        targets: '.b-container__shelf-content h2',
        opacity: [0, 1],
        translateY: [80, 0],
    }).add({
        targets: '.b-container__shelf-content h3',
        opacity: [0, 1],
        translateX: [-200, 0],
        offset: '-=300',
    }).add({
        targets: '.b-container__shelf-content p',
        opacity: [0, 1],
        translateY: [80, 0],
        offset: '-=300',
    }).add({
        targets: '.b-container__shelf-content__row-product',
        opacity: [0, 1],
        translateY: [80, 0],
        delay: (el, i) => 700 * i,
        offset: '-=300',
    }).add({
        targets: '.b-container__off-product-container__image img',
        opacity: [0, 1],
        translateY: [-300, 0],
    }).add({
        targets: '.b-container__off-product-container__text-content h3',
        opacity: [0, 1],
        translateY: [80, 0],
    }).add({
        targets: '.b-container__off-product-container__text-content p',
        opacity: [0, 1],
        translateY: [-80, 0],
    }).add({
        targets: '.b-container__off-departments-container__content-products h2',
        opacity: [0, 1],
        translateY: [80, 0],
    }).add({
        targets: '.b-container__off-departments-container__content-products__row-col',
        opacity: [0, 1],
        translateY: [80, 0],
        delay: (el, i) => 700 * i,
        offset: '-=300',
    }).add({
        targets: '.b-container__newsletter-content__instruction h4',
        opacity: [0, 1],
        translateY: [-80, 0],
    }).add({
        targets: '.b-container__newsletter-content__instruction p',
        opacity: [0, 1],
        translateX: [300, 0],
    }).add({
        targets: '.b-container__newsletter-content__controls input',
        opacity: [0, 1],
        translateX: [300, 0],
    }).add({
        targets: '.b-container__newsletter-content__controls label',
        opacity: [0, 1],
    }).add({
        targets: '.b-container__newsletter-content__controls button',
        opacity: [0, 1],
        translateX: [300, 0],
    }).add({
        targets: '.b-container__blog-container-content__blog-instruction h5',
        opacity: [0, 1],
        translateX: [-300, 0],
    }).add({
        targets: '.b-container__blog-container-content__blog-instruction p',
        opacity: [0, 1],
        translateY: [-100, 0],
    }).add({
        targets: '.b-container__blog-container-content__posts-tips__card',
        opacity: [0, 1],
        translateY: [-100, 0],
    }).add({
        targets: '.b-title-post',
        opacity: [0, 1],
        translateX: [100, 0],
    }).add({
        targets: '.b-author-post',
        opacity: [0, 1],
        translateX: [-100, 0],
    }).add({
        targets: '.b-introduction-post',
        opacity: [0, 1],
        translateY: [-50, 0],
    }).add({
        targets: '.b-container__blog-container-content__posts-tips__card-text__content a',
        opacity: [0, 1],
        translateX: [40, 0],
    }).add({
        targets: '.b-image-decoration',
        opacity: [0, 1],
        translateX: [100, 0],
    }).add({
        targets: '.b-footer-container__institucional-item',
        opacity: [0, 1],
        translateY: [-35, 0],
        duration: 1600,
        offset: '-=700',
        delay: (el, i) => 600 * i,
    }).add({
        targets: '.b-footer-container__brand h6 a',
        opacity: [0, 1],
        translateY: [60, 0],
    })
};

//Function to execute in batch all other function in load of page
document.addEventListener("DOMContentLoaded", () => {
    funiture_CarouselHome();
    funiture_MiniCarouselHome();
    funiture_AnimationTimeline();
});