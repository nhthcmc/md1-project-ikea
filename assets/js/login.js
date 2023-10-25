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
