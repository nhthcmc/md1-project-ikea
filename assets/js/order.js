//place order
function placeOrder() {
    event.preventDefault()
    document.querySelector(".confirm-content").style.display = "flex";
    document.querySelector(".order-content").style.display = "none";
    document.querySelector(".payment-content").style.display = "none";
    const users = JSON.parse(localStorage.getItem("listUsers"));
    const checkLogin = JSON.parse(localStorage.getItem("checkLogin"))
    let user = users.find(user => user.idUser == checkLogin)
    user.cartUser = []
    localStorage.setItem("listUsers", JSON.stringify(users));
    setTimeout(function () {
        window.location.href = "http://localhost:63342/project-module%201/pages/homepage.html?_ijt=f04gn0g6d4gvfj5iem5nnh7q9b&_ij_reload=RELOAD_ON_SAVE";
    }, 3000);
    // clearCart();
    // handleBack()
}

//cart order
const confirmOrder = JSON.parse(localStorage.getItem("listUsers"));

const orderList = document.querySelector("#order-list");

orderList.innerHTML = "";

function addOrders() {
    for (const user of confirmOrder) {
        const cartUser = user.cartUser;

        for (const cartItem of cartUser) {
            // const idOption = cartItem.idOption;
            // const idProduct = cartItem.idProduct;
            const imageLink = cartItem.imageLink;
            const productName = cartItem.productName;
            const size = cartItem.size;
            const quantity = cartItem.quantity;
            const productPrice = cartItem.productPrice;

            const row = document.createElement("tr");
            row.innerHTML = `
                <td class="order-list-item-detail"><img style="height: 150px; width: 150px" src="${imageLink}" alt="${productName}"></td>
                <td class="order-list-item-detail">${productName}</td>
                <td class="order-list-item-detail" style="text-transform: lowercase">${size}</td>
                <td class="order-list-item-detail">${quantity}</td>                                
                <td class="order-list-item-detail">${productPrice}</td>
            `;
            orderList.appendChild(row);
        }
    }
}

window.addEventListener("load", () => {
    addOrders();
});

//delete cart items
// function clearCart() {
//     localStorage.removeItem("cartItem");
// }


//redirect to homepage
// function handleBack() {
//     setTimeout(function() {
//         window.location.href = "http://localhost:63342/project-module%201/pages/homepage.html?_ijt=f04gn0g6d4gvfj5iem5nnh7q9b&_ij_reload=RELOAD_ON_SAVE";
//     }, 3000);
// }
