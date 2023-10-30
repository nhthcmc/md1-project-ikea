//display
function displayConfirm() {
    event.preventDefault()
    document.querySelector(".confirm-content").style.display = "flex";
    document.querySelector(".order-content").style.display = "none";
    document.querySelector(".payment-content").style.display = "none";
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
<!--                <td class="order-list-item-detail"><img src="${imageLink}" alt="${productName}"></td>-->
                <td class="order-list-item-detail">${productName}</td>
                <td class="order-list-item-detail">${size}</td>
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
