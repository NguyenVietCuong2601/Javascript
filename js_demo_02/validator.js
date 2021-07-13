
// Doi tuong 'Validator'
function Validator(options) {

    // Ham thuc hien validate
    function validate(inputElement, rule) {
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
        var errorMessage = rule.test(inputElement.value);
                    
        if (errorMessage) {
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add('invalid');
        } else {    
            errorElement.innerText = '';
            inputElement.parentElement.classList.remove('invalid');
        }
    }
 
    // Lay element cua form
    var formElement = document.querySelector(options.form);
    if (formElement) {
        options.rules.forEach(function (rule) {
            var inputElement = formElement.querySelector(rule.selector);

            if (inputElement) {
                // XU ly truong hop blur khoi input
                inputElement.onblur = function () {
                    // value: inputElement.value
                    // test func: rule.test
                    validate(inputElement, rule);
                }

                // Xu ly truong moi khi nguoi dung nhap vao input
                inputElement.oninput = function () { 
                    var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
                    errorElement.innerText = '';
                    inputElement.parentElement.classList.remove('invalid');
                }
            }
        });

    }
}

// Dinh nghia cac rule
// Nguyen tac cua ca rule
// 1. Khi co loi => tra ra message loi
// 2. Khi hop le => Khong tra ra cai gi ca
Validator.isRequired = function (selector) {
    return {
        selector: selector,
        test: function(value) {
            return value.trim() ? undefined : 'Vui long nhap truong nay'
        }
    };
}

Validator.isEmail = function (selector) {
    return {
        selector: selector,
        test: function(value) {
            var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            return regex.test(value) ? undefined : 'Truong nay phai la email';
        }
    };
}

Validator.minLength = function (selector, min) {
    return {
        selector: selector,
        test: function(value) {
            return value.length >= min ? undefined : `Vui long nhap toi thieu ${min} ki tu`;
        }
    };
}