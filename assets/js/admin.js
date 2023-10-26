// let listOrder = [];
//
// function display() {
//     let newListOrder = JSON.parse(localStorage.getItem("listOrder"))
//     let html = ``;
//     for (let i = 0; i < newListOrder.length; i++) {
//         html += `
//         <tr>
//         <td>${newListOrder[i].id}</td>
//         <td>${newListOrder[i].user}</td>
//         <td>${newListOrder[i].date}</td>
//         <td>${newListOrder[i].order}</td>
//         <td>${newListOrder[i].total}</td>
//         <td><button onclick="pressEdit(${i})">EDIT</button></td>
//         <td><button onclick="pressDelete(${i})">DELETE</button></td>
// </tr>
//         `;
//         document.getElementById("content").innerHTML = html;
//     }
//     resetValue();
// }
//
// display();
//
// function resetValue() {
//     setInputValue("id", "");
//     setInputValue("user", "");
//     setInputValue("date", "");
//     setInputValue("order", "");
//     setInputValue("total", "");
// }
//
// function getInputValue(id) {
//     return document.getElementById(id).value;
// }
//
// function setInputValue(id, value) {
//     document.getElementById(id).value = value;
// }
//
// function add() {
//     let id = getInputValue("id");
//     let user = getInputValue("user");
//     let date = getInputValue("date");
//     let order = getInputValue("order");
//     let total = getInputValue("total");
//     listOrder.push({
//         id,
//         user,
//         date,
//         order,
//         total,
//     });
//     localStorage.setItem("listOrder", JSON.stringify(listOrder))
//     display();
//
// }
//
// function pressDelete(index) {
//     listOrder.splice(index, 1);
//     localStorage.setItem("listOrder", JSON.stringify(listOrder))
//     display();
// }
//
// function pressEdit(index) {
//     let newListOrder = JSON.parse(localStorage.getItem("listOrder"))
//     let bill = newListOrder[index];
//     setInputValue("id", bill.id);
//     setInputValue("user", bill.name);
//     setInputValue("date", bill.date);
//     setInputValue("order", bill.gender);
//     setInputValue("total", bill.class);
//     document.getElementById("save").value = index;
// }
//
// function pressSave() {
//     let newListOrder = JSON.parse(localStorage.getItem("listOrder"))
//     let index = document.getElementById("save").value
//     let newOrder = newListOrder[index];
//     newOrder.id = getInputValue("id")
//     newOrder.name = getInputValue("user")
//     newOrder.date = getInputValue("date")
//     newOrder.gender = getInputValue("order")
//     newOrder.class = getInputValue("total")
//     newListOrder[index] = newOrder;
//     localStorage.setItem("listOrder", JSON.stringify(newListOrder))
//     display()
// }

//sidebar
// let menu = document.querySelector(".menu");
// let sidebar = document.querySelector(".sidebar-container");
//
// menu.addEventListener("click", () => {
//     sidebar.classList.toggle("menuClose");
// })
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
    let newListProductsStock = JSON.parse(localStorage.getItem("listProducts")) || []
    let result = ``;
    for (let i = 0; i < newListProductsStock.length; i++) {
        result += `
        <tr id="product-table-item">
        <td class="product-table-item-detail"><img id="product-img" src="${newListProductsStock[i].img}"/></td>
        <td class="product-table-item-detail">${newListProductsStock[i].name}</td>
        <td class="product-table-item-detail">${newListProductsStock[i].price}</td>
        <td class="product-table-item-detail">${newListProductsStock[i].text}</td>
        <td class="product-table-item-detail">${newListProductsStock[i].type}</td>
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

// displayProducts();

function resetValueProducts() {
    setInputValueProducts("product-img", "");
    // setInputValueProducts("view", "");
    setInputValueProducts("product-name", "");
    setInputValueProducts("product-price", "");
    setInputValueProducts("product-descr", "");
    setInputValueProducts("product-type", "");
}

function getInputValueProducts(id) {
    return document.getElementById(id).value;
}

function setInputValueProducts(id, value) {
    // console.log(id)
    // console.log("value", value)
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
    let newListProductsStock = JSON.parse(localStorage.getItem("listProducts"))
    let index = document.getElementById("saveProduct").value
    let newProduct = newListProductsStock[index];
    newProduct.img = getInputValueProducts("product-img")
    newProduct.name = getInputValueProducts("product-name")
    newProduct.price = getInputValueProducts("product-price")
    newProduct.text = getInputValueProducts("product-descr")
    newProduct.type = getInputValueProducts("product-type")
    newListProductsStock[index] = newProduct;
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
        <td class="user-table-item-detail">${newListUsers[i].password}</td>
        <td><button onclick="pressEditUsers(${i})">EDIT</button></td>
        <td><button onclick="pressDeleteUsers(${i})">DELETE</button></td>
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

// displayUsers();

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
