function uuid() {
    return new Date().getMilliseconds() + Math.floor(Math.random() * 999999999)
}

let listUsers = JSON.parse(localStorage.getItem("listUsers")) || []

console.log("listUsers: ", listUsers)
listUsers.push({
    idUser: uuid(),
    email: "admin@b.com",
    password: "123456",
    password_confirmation: "123456",
    cartUser: [],
    isAdmin: true
})
localStorage.setItem("listUsers", JSON.stringify(listUsers))

if (checkLogin()) {
    document.querySelector("#login-button").style.display = "none"
    document.querySelector("#logout-button").style.display = "block"
}

function checkLogin() {
    var getIsLogin = localStorage.getItem("checkLogin")
    if (getIsLogin == null) {
        return false;
    } else {
        return true
    }
}

function checkLogout() {
    let confirmLogout = confirm("Confirm exit?")
    if (confirmLogout) {
        localStorage.removeItem("checkLogin")
        window.location.href = "homepage.html"
        document.querySelector("#logout-button").style.display = "none"
    }
}

//search
function searchProduct() {
    document.querySelector(".search-input").style.visibility = "visible"
}

function closeSearch() {
    document.querySelector(".search-input").style.visibility = "hidden";
    document.querySelector(".search-container").style.visibility = "hidden";
    document.querySelector(".product-container").style.opacity = 1;

}

function deleteSearchInput() {
    document.querySelector(".search-input__product").value = "";
    document.querySelector(".search-container").innerHTML = "";
    document.querySelector(".product-container").style.opacity = 1;
}

function searchInputProduct() {
    let listProducts = JSON.parse(localStorage.getItem("listProducts"))
    let valueSearchInput = document.querySelector(".search-input__product").value;
    console.log("valueSearchInput", valueSearchInput)
    let resultSearch = []

    let userSearch = listProducts.filter(item => {
        return item.name.toUpperCase().includes(valueSearchInput.toUpperCase())
    })
    renderSearchInput(userSearch)
}

function renderSearchInput(params) {
    console.log("params: ", params)
    let result = ""
    for (let i = 0; i < params.length; i++) {
        result += `
            <div class="searchItem"  onclick="renderProductDetail('${params[i].id}')">
                <div class="searchItem-image">
                    <img src="${params[i].img}" alt="" />
                </div>
                <div class="searchItem-info">
                    <h4 style="font-size: x-large; font-weight: normal;">${params[i].name}</h4>
                    <p style="color: #0058A3; font-size: larger">${USDollar.format(params[i].price)}</p>
                </div>
            </div>
        `
    }
    document.querySelector(".search-container").innerHTML = result;
    document.querySelector(".product-container").style.opacity = 0.5;
}

function clearSearch() {
    document.querySelector(".search-container").innerHTML = "";
}

document.querySelector(".search-input__product").addEventListener("input", handleInputClear);

function handleInputClear() {
    let valueInputSearch = document.querySelector(".search-input__product").value;

    if (valueInputSearch === "") {
        clearSearch();
        document.querySelector(".product-container").style.opacity = 1;
    }
}

//admin
if (checkIsAdmin()) {
    window.location.href = "http://localhost:63342/project-module%201/pages/admin.html?_ijt=ofsffjtb8i12mesruualvktav3&_ij_reload=RELOAD_ON_SAVE"
}

function checkIsAdmin() {
    let checkLogin = localStorage.getItem("checkLogin")
    let listUsers = JSON.parse(localStorage.getItem("listUsers"))

    let user = listUsers.find(user => user.idUser == checkLogin)

    if (user.isAdmin) {
        return true
    } else {
        return false;
    }
}
