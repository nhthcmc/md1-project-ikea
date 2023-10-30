function handleRegister() {
    window.location.href = "register.html"
}

document.addEventListener("DOMContentLoaded", function () {
    Validator({
        form: "#form-1",
        formGroupSelector: ".form-group",
        errorSelector: ".form-message",
        onSubmit: function (data) {
            console.log("data in login: ", data)
            let listUsers = JSON.parse(localStorage.getItem("listUsers")) || []

            let checkUser = listUsers.find(user => {
                return user.email === data.email && user.password === data.password
            })
            if (data.email == "admin@ad.com" && data.password == "admin") {
                window.location.href = "http://localhost:63342/project-module%201/pages/admin.html?_ijt=ofsffjtb8i12mesruualvktav3&_ij_reload=RELOAD_ON_SAVE"
            }
            if (checkUser) {
                showSuccessLoginToast()
                localStorage.setItem("checkLogin", checkUser.idUser)

                function goToHomePage() {
                    window.location.href = "homepage.html"
                }

                setTimeout(goToHomePage, 2000)

            } else {
                showErrorLoginToast()
            }

        }
    })
})
