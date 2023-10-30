function uuid() {
    return new Date().getMilliseconds() + Math.floor(Math.random() * 999999999)
}

let listProductsStock = [
    {
        img: "../assets/img/products/vimle-beige-m.avif",
        view: "../assets/img/products/vimle-v.jpg",
        name: "sofa vimle",
        price: 1229,
        text: "3-seat sofa with chaise longue",
        type: "living",
        options: [
            {
                src: "../assets/img/products/vimle-beige-m.avif",
                sizes: [
                    {
                        key: "small",
                        stock: 10
                    },
                    {
                        key: "medium",
                        stock: 10
                    },
                    {
                        key: "large",
                        stock: 10
                    }
                ]
            },
            {
                src: "../assets/img/products/vimle-blue.avif",
                sizes: [
                    {
                        key: "small",
                        stock: 10
                    },
                    {
                        key: "medium",
                        stock: 10
                    },
                    {
                        key: "large",
                        stock: 10
                    }
                ]
            },
            {
                src: "../assets/img/products/vimle-grey.avif",
                sizes: [
                    {
                        key: "small",
                        stock: 10
                    },
                    {
                        key: "medium",
                        stock: 10
                    },
                    {
                        key: "large",
                        stock: 10
                    }
                ]
            },
        ]
    },
    {
        img: "../assets/img/products/vedbo-grey-m.avif",
        view: "../assets/img/products/vedbo-v.jpg",
        name: "armchair vedbo",
        price: 369,
        text: "High-back armchair",
        type: "living",
        options: [
            {
                src: "../assets/img/products/vedbo-grey-m.avif",
                sizes: [
                    {
                        key: "small",
                        stock: 10
                    },
                    {
                        key: "medium",
                        stock: 10
                    },
                    {
                        key: "large",
                        stock: 10
                    }
                ]
            },
            {
                src: "../assets/img/products/vedbo-blue.avif",
                sizes: [
                    {
                        key: "small",
                        stock: 10
                    },
                    {
                        key: "medium",
                        stock: 10
                    },
                    {
                        key: "large",
                        stock: 10
                    }
                ]
            },
            {
                src: "../assets/img/products/vedbo-green.avif",
                sizes: [
                    {
                        key: "small",
                        stock: 10
                    },
                    {
                        key: "medium",
                        stock: 10
                    },
                    {
                        key: "large",
                        stock: 10
                    }
                ]
            },
        ]
    },
    {
        img: "../assets/img/products/hammarn-m.avif",
        view: "../assets/img/products/hammarn-v.avif",
        name: "sofa-bed hammarn",
        price: 149,
        text: "Sofa-bed",
        type: "living",
        options: [
            {
                src: "../assets/img/products/hammarn-m.avif",
                sizes: [
                    {
                        key: "small",
                        stock: 10
                    },
                    {
                        key: "medium",
                        stock: 10
                    },
                    {
                        key: "large",
                        stock: 10
                    }
                ]
            },
        ]
    },
    {
        img: "../assets/img/products/arkelstorp-m.avif",
        view: "../assets/img/products/arkelstorp-v.avif",
        name: "coffee table arkelstorp",
        price: 249,
        text: "Coffee table",
        type: "living",
        options: [
            {
                src: "../assets/img/products/arkelstorp-m.avif",
                sizes: [
                    {
                        key: "small",
                        stock: 10
                    },
                    {
                        key: "medium",
                        stock: 10
                    },
                    {
                        key: "large",
                        stock: 10
                    }
                ]
            },
        ]
    },
    {
        img: "../assets/img/products/malm-w-m.avif",
        view: "../assets/img/products/malm-v.avif",
        name: "bed malm",
        price: 689,
        text: "Bed frame, high, w 2 storage boxes",
        type: "bed",
        options: [
            {
                src: "../assets/img/products/malm-w-m.avif",
                sizes: [
                    {
                        key: "small",
                        stock: 10
                    },
                    {
                        key: "medium",
                        stock: 10
                    },
                    {
                        key: "large",
                        stock: 10
                    }
                ]
            },
            {
                src: "../assets/img/products/malm-black.avif",
                sizes: [
                    {
                        key: "small",
                        stock: 10
                    },
                    {
                        key: "medium",
                        stock: 10
                    },
                    {
                        key: "large",
                        stock: 10
                    }
                ]
            },
            {
                src: "../assets/img/products/malm-oak.avif",
                sizes: [
                    {
                        key: "small",
                        stock: 10
                    },
                    {
                        key: "medium",
                        stock: 10
                    },
                    {
                        key: "large",
                        stock: 10
                    }
                ]
            },
        ]
    },
    {
        img: "../assets/img/products/hauga-w-m.avif",
        view: "../assets/img/products/hauga-v.avif",
        name: "desk hauga",
        price: 159,
        text: "Desk",
        type: "bed",
        options: [
            {
                src: "../assets/img/products/hauga-w-m.avif",
                sizes: [
                    {
                        key: "small",
                        stock: 10
                    },
                    {
                        key: "medium",
                        stock: 10
                    },
                    {
                        key: "large",
                        stock: 10
                    }
                ]
            },
            {
                src: "../assets/img/products/hauga-beige.avif",
                sizes: [
                    {
                        key: "small",
                        stock: 10
                    },
                    {
                        key: "medium",
                        stock: 10
                    },
                    {
                        key: "large",
                        stock: 10
                    }
                ]
            }
        ]
    },
    {
        img: "../assets/img/products/fridnaes-m.avif",
        view: "../assets/img/products/fridnaes-v.avif",
        name: "table fridnaes",
        price: 189,
        text: "Nesting tables with stools set of 4, black/birch effect",
        type: "bed",
        options: [
            {
                src: "../assets/img/products/fridnaes-m.avif",
                sizes: [
                    {
                        key: "small",
                        stock: 10
                    },
                    {
                        key: "medium",
                        stock: 10
                    },
                    {
                        key: "large",
                        stock: 10
                    }
                ]
            },
        ]
    },
    {
        img: "../assets/img/products/vitval-m.avif",
        view: "../assets/img/products/vitval-v.avif",
        name: "loft bed vitval",
        price: 299,
        text: "Loft bed frame",
        type: "bed",
        options: [
            {
                src: "../assets/img/products/vitval-m.avif",
                sizes: [
                    {
                        key: "small",
                        stock: 10
                    },
                    {
                        key: "medium",
                        stock: 10
                    },
                    {
                        key: "large",
                        stock: 10
                    }
                ]
            }]
    },
    {
        img: "../assets/img/products/enhet-m.avif",
        view: "../assets/img/products/enhet-v.jpg",
        name: "kitchen enhet",
        price: 546,
        text: "Kitchen",
        type: "kitchen",
        options: [
            {
                src: "../assets/img/products/enhet-m.avif",
                sizes: [
                    {
                        key: "small",
                        stock: 10
                    },
                    {
                        key: "medium",
                        stock: 10
                    },
                    {
                        key: "large",
                        stock: 10
                    }
                ]
            }]
    },
    {
        img: "../assets/img/products/haverud-m.jpg",
        view: "../assets/img/products/haverud-v.avif",
        name: "table haverud",
        price: 349,
        text: "Table with storage ladder",
        type: "kitchen",
        options: [
            {
                src: "../assets/img/products/haverud-m.jpg",
                sizes: [
                    {
                        key: "small",
                        stock: 10
                    },
                    {
                        key: "medium",
                        stock: 10
                    },
                    {
                        key: "large",
                        stock: 10
                    }
                ]
            }]
    },
    {
        img: "../assets/img/products/vadholma-m.avif",
        view: "../assets/img/products/vadholma-v.avif",
        name: "kitchen vadholma",
        price: 949,
        text: "Kitchen island with rack",
        type: "kitchen",
        options: [
            {
                src: "../assets/img/products/vadholma-m.avif",
                sizes: [
                    {
                        key: "small",
                        stock: 10
                    },
                    {
                        key: "medium",
                        stock: 10
                    },
                    {
                        key: "large",
                        stock: 10
                    }
                ]
            }]
    },
    {
        img: "../assets/img/products/sunnersta-m.avif",
        view: "../assets/img/products/sunnersta-v.avif",
        name: "kitchen sunnersta",
        price: 210,
        text: "Mini-kitchen",
        type: "kitchen",
        options: [
            {
                src: "../assets/img/products/sunnersta-m.avif",
                sizes: [
                    {
                        key: "small",
                        stock: 10
                    },
                    {
                        key: "medium",
                        stock: 10
                    },
                    {
                        key: "large",
                        stock: 10
                    }
                ]
            }]
    },
    {
        img: "../assets/img/products/roennskaer-m.avif",
        view: "../assets/img/products/roennskaer-v.avif",
        name: "shelf roennskaer",
        price: 39,
        text: "Wash-basin shelf",
        type: "bath",
        options: [
            {
                src: "../assets/img/products/roennskaer-m.avif",
                sizes: [
                    {
                        key: "small",
                        stock: 10
                    },
                    {
                        key: "medium",
                        stock: 10
                    },
                    {
                        key: "large",
                        stock: 10
                    }
                ]
            },
        ]
    },
    {
        img: "../assets/img/products/lilltjaern-m.avif",
        view: "../assets/img/products/lilltjaern-v.avif",
        name: "base lilltjaern",
        price: 25,
        text: "Wash-basin base cabinet w 2 doors",
        type: "bath",
        options: [
            {
                src: "../assets/img/products/lilltjaern-m.avif",
                sizes: [
                    {
                        key: "small",
                        stock: 10
                    },
                    {
                        key: "medium",
                        stock: 10
                    },
                    {
                        key: "large",
                        stock: 10
                    }
                ]
            }]
    },
    {
        img: "../assets/img/products/brogrund-m.avif",
        view: "../assets/img/products/brogrund-v.avif",
        name: "bin brogrund",
        price: 25,
        text: "Touch top bin, stainless steel",
        type: "bath",
        options: [
            {
                src: "../assets/img/products/brogrund-m.avif",
                sizes: [
                    {
                        key: "small",
                        stock: 10
                    },
                    {
                        key: "medium",
                        stock: 10
                    },
                    {
                        key: "large",
                        stock: 10
                    }
                ]
            }]
    },
    {
        img: "../assets/img/products/balungen-m.avif",
        view: "../assets/img/products/balungen-v.avif",
        name: "holder balungen",
        price: 20,
        text: "Toilet roll holder, chrome-plated",
        type: "bath",
        options: [
            {
                src: "../assets/img/products/balungen-m.avif",
                sizes: [
                    {
                        key: "small",
                        stock: 10
                    },
                    {
                        key: "medium",
                        stock: 10
                    },
                    {
                        key: "large",
                        stock: 10
                    }
                ]
            }]
    },
    {
        img: "../assets/img/products/tosteroe-m.avif",
        view: "../assets/img/products/tosteroe-v.avif",
        name: "box tosteroe",
        text: "Storage box, outdoor",
        price: 75,
        type: "outdoor",
        options: [
            {
                src: "../assets/img/products/tosteroe-m.avif",
                sizes: [
                    {
                        key: "small",
                        stock: 10
                    },
                    {
                        key: "medium",
                        stock: 10
                    },
                    {
                        key: "large",
                        stock: 10
                    }
                ]
            },
        ]
    },
    {
        img: "../assets/img/products/torparoe-m.avif",
        view: "../assets/img/products/torparoe-v.avif",
        name: "table torparoe",
        price: 40,
        text: "Balcony table",
        type: "outdoor",
        options: [
            {
                src: "../assets/img/products/torparoe-m.avif",
                sizes: [
                    {
                        key: "small",
                        stock: 10
                    },
                    {
                        key: "medium",
                        stock: 10
                    },
                    {
                        key: "large",
                        stock: 10
                    }
                ]
            },
        ]
    },
    {
        img: "../assets/img/products/torpa-blue-m.jpg",
        view: "../assets/img/products/torpa-v.avif",
        name: "table torpa",
        price: 429,
        text: "Table+4 chairs w armrests, outdoor",
        type: "outdoor",
        options: [
            {
                src: "../assets/img/products/torpa-blue-m.jpg",
                sizes: [
                    {
                        key: "small",
                        stock: 10
                    },
                    {
                        key: "medium",
                        stock: 10
                    },
                    {
                        key: "large",
                        stock: 10
                    }
                ]
            },
            {
                src: "../assets/img/products/torpa-white.avif",
                sizes: [
                    {
                        key: "small",
                        stock: 10
                    },
                    {
                        key: "medium",
                        stock: 10
                    },
                    {
                        key: "large",
                        stock: 10
                    }
                ]
            }
        ]
    },
    {
        img: "../assets/img/products/ytterskaer-m.avif",
        view: "../assets/img/products/ytterskaer-v.avif",
        name: "screen ytterskaer",
        price: 99,
        text: "Privacy screen, outdoor",
        type: "outdoor",
        options: [
            {
                src: "../assets/img/products/ytterskaer-m.avif",
                sizes: [
                    {
                        key: "small",
                        stock: 10
                    },
                    {
                        key: "medium",
                        stock: 10
                    },
                    {
                        key: "large",
                        stock: 10
                    }
                ]
            }]
    },
]

listProductsStock.forEach(item => {
    item.id = uuid()
})

listProductsStock.forEach(item => {
    item.options.forEach(option => option.idOption = uuid())
})
localStorage.setItem("listProducts", JSON.stringify(listProductsStock))

const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency', currency: 'USD'
})

function renderListProduct(params) {
    let result = ""
    for (let i = 0; i < params.length; i++) {
        result += `
            <div onclick="renderProductDetail(${params[i].id})" class="product-item">          
                                                       
                <div class="product-image">
                    <img src="${params[i].img}" alt="products"/>
                </div>
                <div style="display: none" class="product-view">
                    <img src="${params[i].view}" alt="view"/>
                </div>
                <div class="product-descr">
                    <div style="display: none" class="product-type">
                        <span>${params[i].type}</span>
                    </div>
                    <h2 style="text-transform:uppercase;" class="product-name">${params[i].name}</h2>
                    <h3 style="color: #0058A3" class="product-price">${USDollar.format(params[i].price)}</h3>
                    <p class="product-text">${params[i].text}</p>
                </div>
            </div>
            `
    }
    document.querySelector(".product-container").innerHTML = result;
    document.querySelector(".product-container").style.display = "flex";
    document.querySelector(".banner-section").style.display = "none";
    document.querySelector("#ads-video").style.display = "none"

}

function renderListAllProducts() {
    let listProducts = JSON.parse(localStorage.getItem("listProducts"))
    renderListProduct(listProducts)
    document.querySelector(".listPage").style.display = "block";
    document.querySelector("#ads-video").style.display = "none"
}

function renderLivingListProduct() {
    let listProducts = JSON.parse(localStorage.getItem("listProducts"))
    let listProductsLiving = []
    for (let i = 0; i < listProducts.length; i++) {
        if (listProducts[i].type === "living") {
            listProductsLiving.push(listProducts[i])
        }
    }
    renderListProduct(listProductsLiving)
    document.querySelector(".listPage").style.display = "none";
    document.querySelector("#ads-video").style.display = "none"

}

function renderBedListProduct() {
    let listProducts = JSON.parse(localStorage.getItem("listProducts"))
    let listProductsBed = []
    for (let i = 0; i < listProducts.length; i++) {
        if (listProducts[i].type === "bed") {
            listProductsBed.push(listProducts[i])
        }
    }
    renderListProduct(listProductsBed)
    document.querySelector(".listPage").style.display = "none";
    document.querySelector("#ads-video").style.display = "none"

}

function renderKitchenListProduct() {
    let listProducts = JSON.parse(localStorage.getItem("listProducts"))
    let listProductsKitchen = []
    for (let i = 0; i < listProducts.length; i++) {
        if (listProducts[i].type === "kitchen") {
            listProductsKitchen.push(listProducts[i])
        }
    }
    renderListProduct(listProductsKitchen)
    document.querySelector(".listPage").style.display = "none";
    document.querySelector("#ads-video").style.display = "none"

}

function renderBathListProduct() {
    let listProducts = JSON.parse(localStorage.getItem("listProducts"))
    let listProductsBath = []
    for (let i = 0; i < listProducts.length; i++) {
        if (listProducts[i].type === "bath") {
            listProductsBath.push(listProducts[i])
        }
    }
    renderListProduct(listProductsBath)
    document.querySelector(".listPage").style.display = "none";
    document.querySelector("#ads-video").style.display = "none"

}

function renderOutdoorListProduct() {
    let listProducts = JSON.parse(localStorage.getItem("listProducts"))
    let listProductsOutdoor = []
    for (let i = 0; i < listProducts.length; i++) {
        if (listProducts[i].type === "outdoor") {
            listProductsOutdoor.push(listProducts[i])
        }
    }
    renderListProduct(listProductsOutdoor)
    document.querySelector(".listPage").style.display = "none";
    document.querySelector("#ads-video").style.display = "none"

}

function renderProductDetail(idProduct) {

    let listProducts = JSON.parse(localStorage.getItem("listProducts"))
    console.log("listProducts: ", listProducts)
    let productDetail = listProducts.find(item => {
        return item.id == idProduct
    })
    let result = `
    <div class="product">
        <div class="productDetail-image">
            <div class="productDetail-main-image">
                <img src="${productDetail.img}"/>
            </div>
<!--            <div class="productDetail-image-size">-->
<!--            </div>-->
        </div>
        <div class="productDetail-descr">
            <span style="text-transform: uppercase;"><h2 style="font-weight: normal;">${productDetail.name}</h2></span>
            <span style="color: #0058A3"><h3 style="font-weight: normal;">${USDollar.format(productDetail.price)}</h3></span>
            <div><p>${productDetail.text}</p></div>
            <div><h4>Sizes</h4></div>
            <div class="product-size">
                <input type="radio" id="small" value="Small" name="size" class="size-option">
                <label for="small">Small</label>     
                <br>    
                <input type="radio" id="medium" value="Medium" name="size" class="size-option">
                <label for="medium">Medium</label>
                <br>
                <input type="radio" id="large" value="Large" name="size" class="size-option">
                <label for="large">Large</label>                
            </div>
            <div><p>Free shipping for orders from $20</p></div>                
            <button class="addtoCart-button" onclick="addToCart('${productDetail.id}')">ADD TO CART</button><br>
            <p class="product-idOption">${productDetail.options[0].idOption}</p>
<!--            <span class="stock-size-small">Small size available in stock: ${productDetail.options[0].sizes[0].stock}</span><br>-->
<!--            <span class="stock-size-medium">Medium size available in stock: ${productDetail.options[0].sizes[1].stock}</span><br>-->
<!--            <span class="stock-size-large">Large size available in stock: ${productDetail.options[0].sizes[2].stock}</span>-->
                            
                
                  
        </div>
    </div>
`;

    let test = document.querySelector(".product-container").style.display = "flex"
    document.querySelector(".product-container").innerHTML = result;
    document.querySelector(".banner-section").style.display = "none";
    document.querySelector("#ads-video").style.display = "none";

    let productItemSize = document.querySelector(".productDetail-image-size");

    let productSizes = "";
    for (let i = 0; i < productDetail.options.length; i++) {

        productSizes += `
            <img src="${productDetail.options[i].src}" alt="" onclick="changeProductSize(${idProduct}, '${productDetail.options[i].src}', '${productDetail.options[i].idOption}')">
        `
    }
    productItemSize.innerHTML = productSizes;
}

// productSize
function changeProductSize(idProduct, src, idOption) {
    // console.log(idProduct);
    let listProducts = JSON.parse(localStorage.getItem("listProducts"));
    let product = listProducts.find((product) => {
        return product.id == idProduct;
    })
    let option = product.options.find((option) => {
        return option.idOption == idOption;
    })
    document.querySelector(".main-image").src = `${src}`;
    document.querySelector(".product-idOption").innerHTML = `${idOption}`;

    document.querySelector(".stock-size-small").innerHTML = `Small size available in stock: ${option.sizes[0].stock}`;
    document.querySelector(".stock-size-medium").innerHTML = `Medium size available in stock: ${option.sizes[1].stock}`;
    document.querySelector(".stock-size-large").innerHTML = `Large size available in stock: ${option.sizes[2].stock}`;
}

//cart
function addToCart(idProduct) {
    let checkLogin = localStorage.getItem("checkLogin");

    if (checkLogin == null) {
        alert("Please login")
        // showLoginDemandToast();
        return;
    }

    let listProducts = JSON.parse(localStorage.getItem("listProducts"));
    let listUsers = JSON.parse(localStorage.getItem("listUsers"));
    let selectedSize = null;
    let idOption = document.querySelector(".product-idOption").innerHTML;
    const sizeOptions = document.querySelectorAll(".size-option");
    for (let i = 0; i < sizeOptions.length; i++) {
        if (sizeOptions[i].checked) {
            selectedSize = sizeOptions[i].value;
            break;
        }
    }
    if (selectedSize == null) {
        // showErrorSizeToast();
        return;
    }
    let product = listProducts.find((product) => {
        return product.id == idProduct;
    });

    let option = product.options.find((x) => {
        return x.idOption == idOption
    })

    let imageLink = option.src;
    let productName = product.name;
    let productPrice = product.price;

    for (let i = 0; i < listUsers.length; i++) {
        if (listUsers[i].idUser == checkLogin) {
            let cart = listUsers[i].cartUser;
            let existingProduct = cart.find((item) => {
                return item.idOption == idOption && item.size == selectedSize;
            });
            if (existingProduct) {
                existingProduct.quantity++;
                localStorage.setItem("listUsers", JSON.stringify(listUsers));
                showCartTotal()
            } else {
                cart.push({
                    idProduct: idProduct,
                    idOption: idOption,
                    size: selectedSize,
                    quantity: 1,
                    imageLink: imageLink,
                    productName: productName,
                    productPrice: productPrice
                });
                localStorage.setItem("listUsers", JSON.stringify(listUsers));
                showCartTotal()
                alert("Added to cart!")
            }
        }
    }
}

function showCart() {
    document.querySelector(".cart-container").style.display = "block"
    document.querySelector(".nav-container").style.opacity = 0.5;
    document.querySelector(".product-container").style.opacity = 0.5;
    document.querySelector(".banner-section").style.opacity = 0.5;
    document.querySelector(".footer").style.opacity = 0.5;
    document.querySelector("#ads-video").style.opacity = 0.5

    // document.querySelector("#toTop").style.opacity = 0;

    let listUsers = JSON.parse(localStorage.getItem("listUsers"))
    let checkLogin = localStorage.getItem("checkLogin")

    let user = listUsers.find(user => {
        return user.idUser == checkLogin
    })
    let cartUser = user ? user.cartUser : [];
    let result = ""
    for (let i = 0; i < cartUser.length; i++) {
        result += `
        <div class="cartListItem">
            <div class="cartItem">
                <div class="cartItem-image">
                    <img src="${cartUser[i].imageLink}" alt="">
                </div>
                <div class="cartItem-info">
                        <h4 >${cartUser[i].productName}</h4>
                       <p style="display: none">Product code: ${cartUser[i].idOption}</p>
                        <p style="text-transform: lowercase">${cartUser[i].size}</p>
                        <div class="changeQuantity-button">
                                <button>
                                    <span style="cursor: pointer" onclick="decreaseQuantity(${i})" class="material-symbols-outlined">
                                        remove
                                    </span>
                                </button>
                                
                                <span class="product-quantity" id="quantity">${cartUser[i].quantity}</span>

                                <button>
                                    <span style="cursor: pointer" onclick="increaseQuantity(${i})" class="material-symbols-outlined">
                                        add
                                    </span>
                                </button>
                        </div>
                        <p style="color: #0058A3">${USDollar.format(cartUser[i].productPrice)}</p>
                        
                </div>
            <div class="cart-delete-button">
                <span onclick="deleteProduct(${i})" id="del-product-btn" class="material-symbols-outlined">
                delete
                </span>               
            </div>                
            </div>
        </div>   
        `
    }
    document.querySelector(".cart-list").innerHTML = result;
    // document.getElementById("order-list").innerHTML = result;
    calculateTotalPrice()
}

function showCartTotal() {
    let listUsers = JSON.parse(localStorage.getItem("listUsers"));
    let checkLogin = localStorage.getItem("checkLogin");
    let user = listUsers.find((item) => {
        return item.idUser == checkLogin;
    })
    let cartUser = user ? user.cartUser : []
    let total = cartUser.reduce((total, currentValue) => {
        return total += currentValue.quantity;
    }, 0)
    document.querySelector(".nav-right__cart--number").innerHTML = `${total}`;
}

showCartTotal();

document.querySelector(".cart-close").addEventListener("click", () => {
    document.querySelector(".cart-container").style.display = "none";
    document.querySelector(".nav-container").style.opacity = 1;
    document.querySelector(".product-container").style.opacity = 1;
    document.querySelector(".banner-section").style.opacity = 1;
    document.querySelector(".footer").style.opacity = 1;

})

document.querySelector(".cart-continue-btn").addEventListener("click", () => {
    document.querySelector(".cart-container").style.display = "none";
    document.querySelector(".nav-container").style.opacity = 1;
    document.querySelector(".product-container").style.opacity = 1;
    document.querySelector(".banner-section").style.opacity = 1;
    document.querySelector(".footer").style.opacity = 1;

})

function calculateTotalPrice() {
    let listUsers = JSON.parse(localStorage.getItem("listUsers"))
    let checkLogin = localStorage.getItem("checkLogin")
    let user = listUsers.find(item => item.idUser == checkLogin)

    let cartUser = user ? user.cartUser : []

    let totalPrice = cartUser.reduce((total, currentValue) => {
        return total += currentValue.productPrice * currentValue.quantity
    }, 0)

    document.querySelector(".cart-subTotal").innerHTML = `SUBTOTAL: ${USDollar.format(totalPrice)}`
}

function deleteProduct(index) {
    let listUsers = JSON.parse(localStorage.getItem("listUsers"))
    let checkLogin = localStorage.getItem("checkLogin")
    let user = listUsers.find(item => item.idUser == checkLogin)
    let cartUser = user ? user.cartUser : []
    cartUser.splice(index, 1)
    localStorage.setItem("listUsers", JSON.stringify(listUsers))
    showCart()
    showCartTotal()
    calculateTotalPrice()
}

function increaseQuantity(index) {
    let listUsers = JSON.parse(localStorage.getItem("listUsers"))
    let checkLogin = localStorage.getItem("checkLogin")
    for (let i = 0; i < listUsers.length; i++) {
        if (listUsers[i].idUser == checkLogin) {
            let cartUser = listUsers[i].cartUser
            for (let j = 0; j < cartUser.length; j++) {
                if (j == index) {
                    cartUser[j].quantity += 1;
                    localStorage.setItem("listUsers", JSON.stringify(listUsers))
                    showCart();
                    showCartTotal()
                    calculateTotalPrice()
                    return
                }
            }
        }
    }
}

function decreaseQuantity(index) {
    let listUsers = JSON.parse(localStorage.getItem("listUsers"))
    let checkLogin = localStorage.getItem("checkLogin")
    for (let i = 0; i < listUsers.length; i++) {
        if (listUsers[i].idUser == checkLogin) {
            let cartUser = listUsers[i].cartUser
            for (let j = 0; j < cartUser.length; j++) {
                if (cartUser[index].quantity > 1) {
                    cartUser[index].quantity -= 1;
                    localStorage.setItem("listUsers", JSON.stringify(listUsers))
                    showCart();
                    showCartTotal()
                    calculateTotalPrice()
                    return
                } else {
                    cartUser.splice(index, 1)
                    localStorage.setItem("listUsers", JSON.stringify(listUsers))
                    showCart()
                    showCartTotal()
                    calculateTotalPrice()
                    return
                }
            }
        }
    }
}

