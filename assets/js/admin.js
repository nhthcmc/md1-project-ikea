

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
    let result = ``;
    for (let i = 0; i < listProductsStock.length; i++) {
        result += `
        <tr id="product-table-item">
        <td class="product-table-item-detail"><img id="product-img" src="${listProductsStock[i].img}"/></td>
        <td class="product-table-item-detail">${listProductsStock[i].name}</td>
        <td class="product-table-item-detail">${listProductsStock[i].price}</td>
        <td class="product-table-item-detail">${listProductsStock[i].text}</td>
        <td class="product-table-item-detail">${listProductsStock[i].type}</td>
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
    resetValueProducts()
}


function resetValueProducts() {
    setInputValueProducts("product-img", "");
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
    localStorage.setItem("listProductsStock", JSON.stringify(listProductsStock))
    displayProducts();

}

function pressDeleteProducts(index) {
    listProductsStock.splice(index, 1);
    localStorage.setItem("listProductsStock", JSON.stringify(listProductsStock))
    displayProducts();
}

function pressEditProducts(index) {
    let newListProductsStock = JSON.parse(localStorage.getItem("listProducts"))
    let product = newListProductsStock[index];
    setInputValueProducts("product-img", product.img);
    setInputValueProducts("product-name", product.name);
    setInputValueProducts("product-price", product.price);
    setInputValueProducts("product-descr", product.text);
    setInputValueProducts("product-type", product.type);
    document.getElementById("saveProduct").value = index;
}

function pressSaveProducts() {
    let newListProductsStock = JSON.parse(localStorage.getItem("listProductsStock"))
    let index = document.getElementById("saveProduct").value
    let newProduct = newListProductsStock[index];
    newProduct.img = getInputValueProducts("product-img")
    newProduct.name = getInputValueProducts("product-name")
    newProduct.price = getInputValueProducts("product-price")
    newProduct.text = getInputValueProducts("product-descr")
    newProduct.type = getInputValueProducts("product-type")
    newListProductsStock[index] = newProduct;
    localStorage.setItem("listProductsStock", JSON.stringify(newListProductsStock))
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
        <td class="user-table-item-detail">${newListUsers[i].password}</td>
        <td><button id="edit-button" onclick="pressEditUsers(${i})">EDIT</button></td>
        <td><button id="del-button" onclick="pressDeleteUsers(${i})">DELETE</button></td>
      </tr>
        `;
        document.getElementById("user-table").innerHTML = result;
        document.querySelector(".report-container").style.display = "flex";
        document.querySelector(".box-container").style.display = "none";
        document.querySelector(".user-tab").style.display = "block";
        document.querySelector(".product-tab").style.display = "none";
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

//

