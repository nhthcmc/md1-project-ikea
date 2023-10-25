function Validator(options) {

    var formElement = document.querySelector(options.form)

    if (formElement) {
        formElement.onsubmit = function (e) {
            e.preventDefault();
            if (typeof options.onSubmit === 'function') {
                var enableInputs = formElement.querySelectorAll('[name]')
                var formValues = Array.from(enableInputs).reduce(function (values, input) {
                    switch (input.type) {
                        default:
                            values[input.name] = input.value
                    }
                    return values;
                }, {})
                options.onSubmit(formValues)
            }
        }
    }
}

//
// const btnRegister = document.getElementById('btn-register');
//
// btnRegister.addEventListener('click', function () {
//     let isValid = checkValidate;
//
//     if (isValid) {
//         alert('Succeed');
//     }
// });
//
// const emailEle = document.getElementById('email');
//
// function checkValidate() {
//     let emailValue = emailEle.value;
//
//     let isCheck = true;
//
//     if (emailValue == '') {
//         setError(emailEle, 'Please fill in email');
//         isCheck = false;
//     } else if (!isEmail(emailValue)) {
//         setError(emailEle, 'Please input email');
//         isCheck = false;
//     } else {
//         setSuccess(emailEle);
//     }
//
//     return isCheck;
// }
//
// function setError(ele, message) {
//     let parentEle = ele.parentNode;
//     parentEle.classList.add('error');
//     parentEle.querySelector('small').innerText = message;
// }
//
// function setSuccess(ele) {
//     ele.parentNode.classList.add('success');
// }
//
// function isEmail(email) {
//     return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
// }
//
// const inputEle = document.querySelectorAll('.input-row');
//
// btnRegister.addEventListener('click', function () {
//     Array.from(inputEle).map((ele) =>
//         ele.classList.remove('success', 'error')
//     );
//
// ...
// });

const btnRegister = document.getElementById('btn-register');
const inputEle = document.querySelectorAll('.input-row');

btnRegister.addEventListener('click', function (event) {
    event.preventDefault();

    let isValid = checkValidate();

    if (isValid) {
        alert('Succeed');
    }
});

const emailEle = document.getElementById('email');

function checkValidate() {
    let emailValue = emailEle.value.trim(); // Loại bỏ khoảng trắng thừa từ đầu và cuối chuỗi

    let isCheck = true;

    if (emailValue === '') {
        setError(emailEle, 'Please fill in email');
        isCheck = false;
    } else if (!isEmail(emailValue)) {
        setError(emailEle, 'Please input a valid email');
        isCheck = false;
    } else {
        setSuccess(emailEle);
    }

    return isCheck;
}

function setError(ele, message) {
    let parentEle = ele.parentNode;
    parentEle.classList.remove('success'); // Loại bỏ lớp 'success' nếu có
    parentEle.classList.add('error');
    parentEle.querySelector('small').innerText = message;
}

function setSuccess(ele) {
    let parentEle = ele.parentNode;
    parentEle.classList.remove('error'); // Loại bỏ lớp 'error' nếu có
    parentEle.classList.add('success');
}

function isEmail(email) {
    const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailPattern.test(email);
}

btnRegister.addEventListener('click', function () {
    Array.from(inputEle).forEach((ele) => {
        ele.classList.remove('success', 'error');
    });
});