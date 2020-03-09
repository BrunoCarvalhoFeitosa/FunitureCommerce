let carts = document.querySelectorAll(".add-to-cart");

let products = [
    {
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
        name: 'Estofado Saturday Bege Mesclado',
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
];

//Loop to create cart quantity in click function
for(let i = 0; i < carts.length; i++) {
    carts[i].addEventListener("click", () => {
        amountCart(products[i]);
        calculateCost(products[i]);
        setItems(products[i]);
    });
}

//Function to load products from localStorage
function onloadAmountCart() {
    let productQuantity = localStorage.getItem("cartQuantity");
    if(productQuantity) {
        document.querySelector("#cart span").textContent = productQuantity;
    }
}

//Function to create cart quantity
function amountCart(products) {
    let productQuantity = localStorage.getItem("cartQuantity");
    productQuantity = Number(productQuantity);

    if(productQuantity) {
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

    if(cartItems != null) {
        if(cartItems[products.name] == undefined) {
            cartItems = {
                ...cartItems,
                [products.name]: products
            }
        }
        cartItems[products.name].inCart += 1;
        
        let containerImageMinicart = document.querySelector(".b-header-container__minicart-content__products-content__image"); 
        let imageMinicart = document.querySelector(".b-header-container__minicart-content__products-content__image img"); 
        containerImageMinicart.classList.add("is--active-imageminicart");
        imageMinicart.src = `${cartItems[products.name].image}`;

        let nameMinicart = document.querySelector(".b-header-container__minicart-content__products-content__name h4");
        nameMinicart.textContent = `${cartItems[products.name].name}`;
        
        let priceMinicart = document.querySelector(".b-header-container__minicart-content__products-content__price h4") 
        priceMinicart.textContent = `${cartItems[products.name].bestPrice}`;
        } else {
        products.inCart = 1;
        cartItems = {
            [products.name]: products
        }
    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

//Function to calculate total cost of cart
function calculateCost(products) {
    let cartCost = localStorage.getItem("totalCost");
    
    if(cartCost != null) {
        cartCost = Number(cartCost);
        localStorage.setItem("totalCost", cartCost + products.bestPrice);
        document.querySelector(".b-header-container__minicart-content__cost-price span").textContent = cartCost;
    } else {
        localStorage.setItem("totalCost", products.bestPrice);
    }
}

//Function to load products from localStorage
function onloadTotalCart() {
    let cartCost = localStorage.getItem("totalCost");
    if(cartCost) {
        document.querySelector(".b-header-container__minicart-content__cost-price span").textContent = cartCost;
    }
}

onloadAmountCart();
onloadTotalCart();