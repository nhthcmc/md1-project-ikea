// function display() {
//     let listUsers = JSON.parse(localStorage.getItem("listUsers"))
//     let checkLogin = localStorage.getItem("checkLogin")
//     let user = listUsers.find((item) => {
//         return item.idUser == checkLogin
//     })
//     let cartUser = user ? user.cartUser : [];
//     let result = "";
//     for (let i = 0; i < listOrder.length; i++) {
//         result += `
//         <div class="orderListItem">
//             <div class="orderItem">
//                 <div class="orderItem-image">
//                     <img src="${cartUser[i].imageLink}" alt="">
//                 </div>
//                 <div class="orderItem-info">
//                         <h4>${cartUser[i].productName}</h4>
//                        <p style="display: none">Product code: ${cartUser[i].idOption}</p>
//                         <p style="text-transform: lowercase">${cartUser[i].size}</p>
//                         <p style="color: #0058A3">${USDollar.format(cartUser[i].productPrice)}</p>
//                 </div>
//             </div>
//         </div>
//         `
//     }
//     console.log("result", result)
//
//     document.querySelector(".order-list").innerHTML = result;
// }
//
// display()

// let cartUser = JSON.parse(localStorage.getItem("cartUser"))
//
// function displayOrders() {
//     let result = ``;
//     for (let i = 0; i < cartUser.length; i++) {
//         result += `
//         <div class="orderListItem">
//             <div class="orderItem">
//                 <div class="orderItem-image">
//                     <img src="${cartUser[i].imageLink}" alt="">
//                 </div>
//                 <div class="orderItem-info">
//                     <h4>${cartUser[i].productName}</h4>
//                     <p style="display: none">Product code: ${cartUser[i].idOption}</p>
//                     <p style="text-transform: lowercase">${cartUser[i].size}</p>
//                     <p style="color: #0058A3">${USDollar.format(cartUser[i].productPrice)}</p>
//                 </div>
//             </div>
//         </div>
//         `;
//     }
//     document.getElementById("order-list").innerHTML = result;
// }
//
// displayOrders();


