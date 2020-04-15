//Function to open minicart in icon cart and buy button of products
const furniture_OpenMiniCart = () => {
    let buttonBuy = document.querySelectorAll(".add-to-cart");
    let buttonCart = document.querySelector("#cart span");

    buttonCart.addEventListener("click", () => {
        document.querySelector(".b-header-container__minicart").classList.add("is--active-minicart");
    });

    for (let i = 0; i < buttonBuy.length; i++) {
        buttonBuy[i].addEventListener("click", () => {
            document.querySelector(".b-header-container__minicart").classList.add("is--active-minicart");
        });
    };
}

//Function to close minicart in close and continue button of minicart
const furniture_CloseMiniCart = () => {
    let buttonClose = document.querySelector(".b-header-container__minicart-content__title-close");
    let buttonContinue = document.querySelector(".b-header-container__minicart-content__continue a");

    buttonClose.addEventListener("click", () => {
        document.querySelector(".b-header-container__minicart").classList.remove("is--active-minicart");
    });

    buttonContinue.addEventListener("click", () => {
        document.querySelector(".b-header-container__minicart").classList.remove("is--active-minicart");
    });

    document.addEventListener("keyup", (ev) => {
        switch (ev.key) {
            case "Escape":
                document.querySelector(".b-header-container__minicart").classList.remove("is--active-minicart");
                break;
            default:
                break;
        }
    });
};

//Function to calculate value of products in minicart
const furniture_CalculateMinicart = () => {
    let carts = document.querySelectorAll(".add-to-cart");
    let products = [{
            status: 'Em estoque',
            image: '../images/image-home-sofa01.png',
            name: 'Estofado Trend Nude',
            oldPrice: 3999.99,
            bestPrice: 3899.99,
            inCart: 0
        },
        {
            status: 'Em estoque',
            image: '../images/image-home-sofa02.png',
            name: 'Estofado Basic Nude',
            oldPrice: 3599.99,
            bestPrice: 3399.99,
            inCart: 0
        },
        {
            status: 'Em estoque',
            image: '../images/image-home-sofa03.png',
            name: 'Estofado Home Nude',
            oldPrice: 3399.99,
            bestPrice: 3199.99,
            inCart: 0
        },
        {
            status: 'Em estoque',
            image: '../images/image-home-sofa04.png',
            name: 'Estofado Saturday Bege',
            oldPrice: 4099.99,
            bestPrice: 3899.99,
            inCart: 0
        },
        {
            status: 'Em estoque',
            image: '../images/image-home-sofa05.png',
            name: 'Estofado Biagio Nude/Quebec',
            oldPrice: 4899.99,
            bestPrice: 4699.99,
            inCart: 0
        },
        {
            status: 'Em estoque',
            image: '../images/image-home-sofa06.png',
            name: 'Estofado Bruxelas Nude',
            oldPrice: 4599.99,
            bestPrice: 4299.99,
            inCart: 0
        },
        {
            status: 'Em estoque',
            image: '../images/image-home-sofa07.png',
            name: 'Estofado Kauê Nude',
            oldPrice: 4699.99,
            bestPrice: 4499.99,
            inCart: 0
        },
        {
            status: 'Em estoque',
            image: '../images/image-home-sofa08.png',
            name: 'Estofado Nalanda Nude',
            oldPrice: 4599.99,
            bestPrice: 4399.99,
            inCart: 0
        },
        {
            status: 'Em estoque',
            image: '../images/image-home-sofa09.png',
            name: 'Estofado Zurique Nude/Quebec',
            oldPrice: 4999.99,
            bestPrice: 4799.99,
            inCart: 0
        },
        {
            status: 'Em estoque',
            image: '../images/image-home-sofa10.png',
            name: 'Estofado Aspen Nude/Quebec',
            oldPrice: 4299.99,
            bestPrice: 4099.99,
            inCart: 0
        },
        {
            status: 'Em estoque',
            image: '../images/image-home-sofa11.png',
            name: 'Estofado Soul Nude',
            oldPrice: 3299.99,
            bestPrice: 3099.99,
            inCart: 0
        },
        {
            status: 'Em estoque',
            image: '../images/image-home-sofa12.png',
            name: 'Estofado Nuage Nude',
            oldPrice: 3999.99,
            bestPrice: 3799.99,
            inCart: 0
        },
        {
            status: 'Em estoque',
            image: '../images/image-home-sofa13.png',
            name: 'Estofado Vitara Nude',
            oldPrice: 3699.99,
            bestPrice: 3399.99,
            inCart: 0
        },
        {
            status: 'Em estoque',
            image: '../images/image-home-sofa14.png',
            name: 'Estofado Arezzo Nude',
            oldPrice: 3999.99,
            bestPrice: 3799.99,
            inCart: 0
        },
        {
            status: 'Em estoque',
            image: '../images/image-home-sofa15.png',
            name: 'Estofado Style Nude',
            oldPrice: 3299.99,
            bestPrice: 2999.99,
            inCart: 0
        },
        {
            status: 'Em estoque',
            image: '../images/image-home-poltron01.png',
            name: 'Poltrona Adelle Nude',
            oldPrice: 799.99,
            bestPrice: 599.99,
            inCart: 0
        },
        {
            status: 'Em estoque',
            image: '../images/image-home-poltron02.png',
            name: 'Poltrona Holly Nude',
            oldPrice: 899.99,
            bestPrice: 799.99,
            inCart: 0
        },
        {
            status: 'Em estoque',
            image: '../images/image-home-poltron03.png',
            name: 'Poltrona Tulipa Nude',
            oldPrice: 599.99,
            bestPrice: 499.99,
            inCart: 0
        },
        {
            status: 'Em estoque',
            image: '../images/image-home-poltron04.png',
            name: 'Poltrona Ono Nude',
            oldPrice: 699.99,
            bestPrice: 499.99,
            inCart: 0
        },
        {
            status: 'Em estoque',
            image: '../images/image-home-poltron05.png',
            name: 'Poltrona Savona Nude',
            oldPrice: 599.99,
            bestPrice: 499.99,
            inCart: 0
        },
        {
            status: 'Em estoque',
            image: '../images/image-home-poltron06.png',
            name: 'Poltrona Miss Nude',
            oldPrice: 899.99,
            bestPrice: 799.99,
            inCart: 0
        },
        {
            status: 'Em estoque',
            image: '../images/image-home-poltron07.png',
            name: 'Poltrona Marau Nude',
            oldPrice: 899.99,
            bestPrice: 799.99,
            inCart: 0
        },
        {
            status: 'Em estoque',
            image: '../images/image-home-poltron08.png',
            name: 'Poltrona Itauna Nude',
            oldPrice: 949.99,
            bestPrice: 849.99,
            inCart: 0
        },
        {
            status: 'Em estoque',
            image: '../images/image-home-poltron09.png',
            name: 'Poltrona Saiupe Nude',
            oldPrice: 569.99,
            bestPrice: 469.99,
            inCart: 0
        },
        {
            status: 'Em estoque',
            image: '../images/image-home-poltron10.png',
            name: 'Poltrona Dicci Nude',
            oldPrice: 699.99,
            bestPrice: 599.99,
            inCart: 0
        },
        {
            status: 'Em estoque',
            image: '../images/image-home-poltron11.png',
            name: 'Poltrona Breeze Nude',
            oldPrice: 839.99,
            bestPrice: 739.99,
            inCart: 0
        },
        {
            status: 'Em estoque',
            image: '../images/image-home-poltron12.png',
            name: 'Poltrona Fox Nude',
            oldPrice: 589.99,
            bestPrice: 489.99,
            inCart: 0
        },
        {
            status: 'Em estoque',
            image: '../images/image-home-poltron13.png',
            name: 'Poltrona Melissa Nude',
            oldPrice: 629.99,
            bestPrice: 529.99,
            inCart: 0
        },
        {
            status: 'Em estoque',
            image: '../images/image-home-poltron14.png',
            name: 'Poltrona Cotton Nude',
            oldPrice: 819.99,
            bestPrice: 699.99,
            inCart: 0
        },
        {
            status: 'Em estoque',
            image: '../images/image-home-poltron15.png',
            name: 'Poltrona Elza Nude',
            oldPrice: 499.99,
            bestPrice: 369.99,
            inCart: 0
        },
    ];

    //Loop to create cart quantity in click function
    for (let i = 0; i < carts.length; i++) {
        carts[i].addEventListener("click", () => {
            amountCart(products[i]);
            calculateCost(products[i]);
            setItems(products[i]);
            displayMinicart();
        });
    }

    //Function to load products from localStorage
    function onloadAmountCart() {
        let productQuantity = localStorage.getItem("cartQuantity");
        if (productQuantity) {
            document.querySelector("#cart span").textContent = productQuantity;
        }
    }

    //Function to display text "Adding..." in buy button
    function displayTextBuyButton() {
        carts.forEach((button) => {
            button.addEventListener("click", () => {
                button.innerHTML = "Adicionando...";
                let minicart = document.querySelector(".b-header-container__minicart");
                if(minicart.classList.contains('is--active-minicart')) {
                    return setTimeout(() => {
                        button.innerHTML = "Adicionar à sacola";
                    }, 1200);
                };
            });
        });
    };

    //Function to create cart quantity
    function amountCart(products) {
        let productQuantity = localStorage.getItem("cartQuantity");
        productQuantity = Number(productQuantity);

        if (productQuantity) {
            localStorage.setItem("cartQuantity", productQuantity + 1);
            document.querySelector("#cart span").textContent = productQuantity + 1;
        } else {
            localStorage.setItem("cartQuantity", 1);
            document.querySelector("#cart span").textContent = 1;
        }

        setItems(products);
    }

    //Function to identificate products in cart
    function setItems(products) {
        let cartItems = localStorage.getItem("productsInCart");
        cartItems = JSON.parse(cartItems);

        if (cartItems != null) {
            if (cartItems[products.name] == undefined) {
                cartItems = {
                    ...cartItems,
                    [products.name]: products
                }
            }
            cartItems[products.name].inCart = 1;
           } else {
            products.inCart = 0;
            cartItems = {
                [products.name]: products
            }
        }

        localStorage.setItem("productsInCart", JSON.stringify(cartItems));
    }

    //Function to calculate total cost of cart
    function calculateCost(products) {
        let cartCost = localStorage.getItem("totalCost");

        if (cartCost != null) {
            cartCost = Number(cartCost);
            localStorage.setItem("totalCost", cartCost + products.bestPrice);
        } else {
            localStorage.setItem("totalCost", products.bestPrice);
        }
    };

    //Function to display products in minicart
    function displayMinicart() {
        let cartItems = localStorage.getItem("productsInCart");
        cartItems = JSON.parse(cartItems);
        let minicartContainer = document.querySelector(".b-header-container__minicart-content__products-content");
        let cartCost = localStorage.getItem("totalCost");

        if(cartItems && minicartContainer) {
            minicartContainer.innerHTML = '';

            Object.values(cartItems).forEach(product => {
                minicartContainer.innerHTML += `
                <div class="b-header-container__minicart-content__products-content__item">
                    <div class="b-header-container__minicart-content__products-content__item-image">
                        <img src="../../images/${product.image}" />
                    </div>
                    <div class="b-header-container__minicart-content__products-content__item-name">
                        <h4>${product.name}</h4>
                    </div>
                    <div class="b-header-container__minicart-content__products-content__item-price">
                        <h4>${product.bestPrice}</h4>
                    </div>
                </div>
                `;
            });

            document.querySelector(".b-header-container__minicart-content__cost-price span").textContent = cartCost;
            localStorage.setItem("productsInMinicart", minicartContainer.innerHTML);
        }
    };

    //Function to display products in cart page
    function displayCart() {
        let cartItems = localStorage.getItem("productsInCart");
        cartItems = JSON.parse(cartItems);
        let productContainer = document.querySelector(".b-cart-content__products");
        let cartCost = localStorage.getItem("totalCost");

        if(cartItems && productContainer) {
            productContainer.innerHTML = '';
            Object.values(cartItems).forEach(item => {
                productContainer.innerHTML += `
                    <div class="b-cart-content__products-product">
                        <div class="b-cart-content__products-product__image">
                            <img src="../../images/${item.image}" />
                            <div class="b-cart-content__products-product__image-name">
                                <p>${item.name}</p>
                            </div>
                        </div>
                        <div class="b-cart-content__products-product__price">
                            <span>R$${item.bestPrice}</span>
                        </div>
                        <div class="b-cart-content__products-product__quantity">
                            <span class="decrease">-</span>
                            <span>${item.inCart}</span>
                            <span class="increase">+</span>
                        </div>
                        <div class="b-cart-content__products-product__total">
                            <span>R$${item.inCart * item.bestPrice}</span>
                        </div>
                    </div>
                `;
            });

            productContainer.innerHTML += `
                <div class="b-cart-content__products-summary">
                    <div class="b-cart-content__products-summary__text">
                        <p>Agradecemos a sua preferência.</p>
                    </div>
                    <div class="b-cart-content__products-summary__finally">
                        <button type="submit">Finalizar</button>
                    </div>
                    <div class="b-cart-content__products-summary__subtotal">
                        <h3 class="summary-title">Total</h3>
                        <h3 class="summary-subtotal">R$<span>${cartCost}</span></h3>
                    </div>
                </div>
            `;
        }
    };

    onloadAmountCart();
    displayTextBuyButton();
    displayCart();
};

//Function to execute in batch all other function in load of page
document.addEventListener("DOMContentLoaded", () => {
    furniture_OpenMiniCart();
    furniture_CloseMiniCart();
    furniture_CalculateMinicart();
});