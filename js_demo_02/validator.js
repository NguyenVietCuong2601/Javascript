
// Doi tuong 'Validator'
function Validator(options) {

    var selectorRules = {};

    // Ham thuc hien validate
    function validate(inputElement, rule) {
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
        var errorMessage;

        // Lay ra cac rules cua selector
        var rules = selectorRules[rule.selector]
        
        // Lap qua tung rule & kiem tra
        // Neu co loi thi dung viec kiem tra
        for (var i = 0; i < rules.length; i++) {
            errorMessage = rules[i](inputElement.value);
            if (errorMessage) break;
        }
                    
        if (errorMessage) {
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add('invalid');
        } else {    
            errorElement.innerText = '';
            inputElement.parentElement.classList.remove('invalid');
        }

        return !errorMessage;
    }

    // Lay element cua form
    var formElement = document.querySelector(options.form);
    if (formElement) {

        // Khi submit form
        formElement.onsubmit = function (e) {
            e.preventDefault();

            var isFormValid = true;
            // Lap qua tung rule & validate
            options.rules.forEach(function (rule) {
                var inputElement = formElement.querySelector(rule.selector);
                 var isValid = validate(inputElement, rule);
                if (!isValid) {
                    isFormValid = false;
                }
            });

            if (isFormValid) {
                // Truong hop submit voi Javascript
                if (typeof options.onSubmit === 'function') {
                    var enableInputs = formElement.querySelectorAll('[name]');
                    var formValues = Array.from(enableInputs).reduce(function (values, input) {
                        return (values[input.name] = input.value) && values;
                    }, {});
                    options.onSubmit(formValues);
                } 
                // Truong hop submit voi hanh vi mac dinh
                else {
                    formElement.submit();
                }
            }
        }

        // Xu ly lap qua moi rule va xu ly (lang nghe su kien blur, input,...)
        options.rules.forEach(function (rule) {

            // Luu lai cac rule cho moi input
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test)
            } else {
                selectorRules[rule.selector] = [rule.test]
            }

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
Validator.isRequired = function (selector, message) {
    return {
        selector: selector,
        test: function(value) {
            return value.trim() ? undefined : message || 'Vui long nhap truong nay'
        }
    };
}

Validator.isEmail = function (selector, message) {
    return {
        selector: selector,
        test: function(value) {
            var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            return regex.test(value) ? undefined : message || 'Truong nay phai la email';
        }
    };
}

Validator.minLength = function (selector, min, message) {
    return {
        selector: selector,
        test: function(value) {
            return value.length >= min ? undefined : message || `Vui long nhap toi thieu ${min} ki tu`;
        }
    };
}

Validator.isComfirmed = function (selector, getComfirmValue, message) {
    return {
        selector: selector,
        test: function(value) {
            return value === getComfirmValue() ? undefined : message || 'Gia tri nhap vao khong chinh xac';
        }
    }
}