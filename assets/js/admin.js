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
let menu = document.querySelector(".menu");
let sidebar = document.querySelector(".sidebar-container");

menu.addEventListener("click", () => {
    sidebar.classList.toggle("menuClose");
})
//products-table
function displayProducts() {
    let newListProductsStock = JSON.parse(localStorage.getItem("listProducts"))
    let result = ``;
    for (let i = 0; i < newListProductsStock.length; i++) {
        result += `
        <tr id="product-table-item">
        <td class="product-table-item-detail"><img id="product-img" src="${newListProductsStock[i].img}"/></td>
<!--        <th><img id="" src="${newListProductsStock[i].view}"/></th>-->
        <td class="product-table-item-detail">${newListProductsStock[i].name}</td>
        <td class="product-table-item-detail">${newListProductsStock[i].price}</td>
        <td class="product-table-item-detail">${newListProductsStock[i].text}</td>
        <td class="product-table-item-detail">${newListProductsStock[i].type}</td>
</tr>
        `;
        document.getElementById("product-table").innerHTML = result;
    }
    resetValueProducts()
}

displayProducts();

function resetValueProducts() {
    setInputValueProducts("img", "");
    setInputValueProducts("view", "");
    setInputValueProducts("name", "");
    setInputValueProducts("price", "");
    setInputValueProducts("text", "");
    setInputValueProducts("type", "");
}

function getInputValueProducts(id) {
    return document.getElementById(id).value;
}

function setInputValueProducts(id, value) {
    document.getElementById(id).value = value;
}

//users-table
function displayUsers() {
    let newListUsers = JSON.parse(localStorage.getItem("listUsers"))
    let result = ``;
    for (let i = 0; i < newListUsers.length; i++) {
        result += `
        <tr>
        <td>${newListUsers[i].email}</td>
        <td>${newListUsers[i].password}</td>
      </tr>
        `;
        document.getElementById("user-table").innerHTML = result;
    }
    resetValueUsers()
}

displayUsers();

function resetValueUsers() {
    setInputValueUsers("img", "");
    setInputValueUsers("view", "");
    setInputValueUsers("name", "");
    setInputValueUsers("price", "");
    setInputValueUsers("text", "");
    setInputValueUsers("type", "");
}

function getInputValueUsers(id) {
    return document.getElementById(id).value;
}

function setInputValueUsers(id, value) {
    document.getElementById(id).value = value;
}


