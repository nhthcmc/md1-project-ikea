//sidebar
let menu = document.querySelector(".menu");
let sidebar = document.querySelector(".sidebar-container");

menu.addEventListener("click", () => {
    sidebar.classList.toggle("menuClose");
})

//logout
function checkLogout() {
    let confirmLogout = confirm("Confirm exit?")
    if (confirmLogout) {
        localStorage.removeItem("checkLogin")
        window.location.href = "homepage.html"
        document.querySelector("#logout-button").style.display = "none"
    }
}

//products-table
let listProductsStock = JSON.parse(localStorage.getItem("listProducts"))

function displayProducts() {
    let showProducts = JSON.parse(localStorage.getItem("listProducts"))
    let result = ``;
    for (let i = 0; i < showProducts.length; i++) {
        result += `
        <tr id="product-table-item">
        <td class="product-table-item-detail"><img id="product-img" src="${showProducts[i].img}"/></td>
        <td class="product-table-item-detail">${showProducts[i].name}</td>
        <td class="product-table-item-detail">${showProducts[i].price}</td>
        <td class="product-table-item-detail">${showProducts[i].text}</td>
        <td class="product-table-item-detail">${showProducts[i].type}</td>
        <td><button onclick="pressEditProducts(${i})">EDIT</button></td>
        <td><button onclick="pressDeleteProducts(${i})">DELETE</button></td>
</tr>
        `;
    }
    document.getElementById("product-table").innerHTML = result;
    document.querySelector(".report-container").style.display = "flex";
    document.querySelector(".box-container").style.display = "none";
    document.querySelector(".product-tab").style.display = "block";
    document.querySelector(".user-tab").style.display = "none";
    document.querySelector(".order-tab").style.display = "none";

    // resetValueProducts()
}


function resetValueProducts() {
    // setInputValueProducts("product-img", "");
    setInputValueProducts("product-name", "");
    setInputValueProducts("product-price", "");
    setInputValueProducts("product-descr", "");
    setInputValueProducts("product-type", "");
}

function getInputValueProducts(id) {
    return document.getElementById(id).value;
}

function setInputValueProducts(id, value) {
    document.getElementById(id).value = value;
}

function addProducts() {
    let img = getInputValueProducts("product-img");
    let name = getInputValueProducts("product-name");
    let price = getInputValueProducts("product-price");
    let text = getInputValueProducts("product-descr");
    let type = getInputValueProducts("product-type");
    listProductsStock.push({
        img,
        name,
        price,
        text,
        type,
    });
    localStorage.setItem("listProducts", JSON.stringify(listProductsStock))
    displayProducts();

}

function pressDeleteProducts(index) {
    listProductsStock.splice(index, 1);
    localStorage.setItem("listProducts", JSON.stringify(listProductsStock))
    displayProducts();
}

function pressEditProducts(index) {
    let newListProductsStock = JSON.parse(localStorage.getItem("listProducts"))
    let product = newListProductsStock[index];
    // setInputValueProducts("product-img", product.img);
    setInputValueProducts("product-name", product.name);
    setInputValueProducts("product-price", product.price);
    setInputValueProducts("product-descr", product.text);
    setInputValueProducts("product-type", product.type);
    document.getElementById("saveProduct").value = index;
}

function pressSaveProducts() {
    let newListProductsStock = JSON.parse(localStorage.getItem("listProducts"))
    let index = document.getElementById("saveProduct").value
    // let newProduct = newListProductsStock[index];
    newListProductsStock[index].img = getInputValueProducts("product-img")
    newListProductsStock[index].name = getInputValueProducts("product-name")
    newListProductsStock[index].price = getInputValueProducts("product-price")
    newListProductsStock[index].text = getInputValueProducts("product-descr")
    newListProductsStock[index].type = getInputValueProducts("product-type")
    // newListProductsStock[index] = newProduct;
    localStorage.setItem("listProducts", JSON.stringify(newListProductsStock))
    displayProducts()
}


//users-table
function displayUsers() {
    let newListUsers = JSON.parse(localStorage.getItem("listUsers")) || []
    let result = ``;
    for (let i = 0; i < newListUsers.length; i++) {
        result += `
        <tr id="user-table-item">
        <td class="user-table-item-detail">${newListUsers[i].email}</td>
        <td><button id="sendPromo-button" onclick="">SEND PROMO</button></td>
      </tr>
        `;
        document.getElementById("user-table").innerHTML = result;
        document.querySelector(".report-container").style.display = "flex";
        document.querySelector(".box-container").style.display = "none";
        document.querySelector(".user-tab").style.display = "block";
        document.querySelector(".product-tab").style.display = "none";
        document.querySelector(".order-tab").style.display = "none";

    }
    resetValueUsers()

}


function resetValueUsers() {
    setInputValueUsers("user-email", "");
    setInputValueUsers("user-password", "");
}

function getInputValueUsers(id) {
    return document.getElementById(id).value;
}

function setInputValueUsers(id, value) {
    document.getElementById(id).value = value;
}

function pressDeleteUsers(index) {
    listUsers.splice(index, 1);
    localStorage.setItem("listUsers", JSON.stringify(listUsers))
    displayUsers();
}

function pressEditUsers(index) {
    let newListUsers = JSON.parse(localStorage.getItem("listUsers"))
    let user = newListUsers[index];
    setInputValueUsers("user-email", user.email);
    setInputValueUsers("user-password", user.password);
    document.getElementById("saveUser").value = index;
}

function pressSaveUsers() {
    let newListUsers = JSON.parse(localStorage.getItem("listUsers"))
    let index = document.getElementById("saveUser").value
    let newUser = newListUsers[index];
    newUser.img = getInputValueProducts("user-email")
    newUser.name = getInputValueProducts("user-password")
    newListUsers[index] = newUser;
    localStorage.setItem("listUsers", JSON.stringify(newListUsers))
    displayUsers()
}

// order-table
const showOrders = JSON.parse(localStorage.getItem("listUsers"));

const orderTable = document.querySelector("#order-table");

orderTable.innerHTML = "";

function addOrders() {
    for (const user of showOrders) {
        const cartUser = user.cartUser;
        const emailUser = user.email;

        for (const cartItem of cartUser) {
            // const idOption = cartItem.idOption;
            // const idProduct = cartItem.idProduct;
            // const imageLink = cartItem.imageLink;
            const productName = cartItem.productName;
            const size = cartItem.size;
            const quantity = cartItem.quantity;
            const productPrice = cartItem.productPrice;

            const row = document.createElement("tr");
            row.innerHTML = `
                <td class="order-table-item-detail">${emailUser}</td>
                <td class="order-table-item-detail">${productName}</td>
                <td class="order-table-item-detail" style="text-transform: lowercase">${size}</td>
                <td class="order-table-item-detail">${quantity}</td>                                
                <td class="order-table-item-detail">${productPrice}</td>
                <td><button id="assist-button" onclick="">ASSIST</button></td>              
               
            `;
            orderTable.appendChild(row);
        }
    }
}

window.addEventListener("load", () => {
    addOrders();
});

function displayOrders() {
    document.querySelector(".report-container").style.display = "flex";
    document.querySelector(".box-container").style.display = "none";
    // addOrders()
    document.querySelector(".product-tab").style.display = "none";
    document.querySelector(".user-tab").style.display = "none";
    document.querySelector(".order-tab").style.display = "block";

}

