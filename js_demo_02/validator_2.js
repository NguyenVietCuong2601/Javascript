
function Validator(formSelector) {
    function getParent (element, selector) {

        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }

    }

    var formRules = {};
    var validatorRules = {

        /**
         * Quy uoc tao rule:
         * - Neu co loi thhi tra lai `error message`
         * - Ner khong co loi thi return  `undefined`
         */
        required: function(value) {
            return value ? undefined : 'Vui long nhap truong nay';
        },
        email: function(value) {
            var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            return regex.test(value) ? undefined : 'Vui long nhap email';
        },
        min: function(min) {
            return function(value) {
                return value.length >= min ? undefined : `Vui long nhap toi thieu ${min} ki tu`;
            }
        },
        max: function(max) {
            return function(value) {
                return value.length <= max ? undefined : `Vui long nhap toi da ${max} ki tu`;
            }
        },
    };

    // Lay ra form element trong DOM theo 'formSelector'
    var formElement = document.querySelector(formSelector);

    // Chi xu ly khi co element trong DOM
    if (formElement) {
        var inputs = formElement.querySelectorAll('[name][rules]');
        for (var input of inputs) {

            var rules = input.getAttribute('rules').split('|');
            for (var rule of rules) {
                var ruleInfo;
                var isRuleHasValue = rule.includes(':');

                if (isRuleHasValue) {
                    ruleInfo = rule.split(':');
                    rule = ruleInfo[0];
                }

                var ruleFunc = validatorRules[rule]

                if (isRuleHasValue) {
                    ruleFunc = ruleFunc(ruleInfo[1]);
                }

                if (Array.isArray(formRules[input.name])) {
                    formRules[input.name].push(ruleFunc);
                } else {
                    formRules[input.name] = [ruleFunc]
                }
            }

            // Lang nghe su kien de validate (onblur, onchange,...)
            input.onblur = handleValidate;
            input.oninput = handleClearError;
        }

        // Ham xu ly validate
        function handleValidate(event) {
            var rules = formRules[event.target.name]
            var errorMessage;
            rules.some(function (rule) {
                errorMessage = rule(event.target.value)
                return errorMessage;
            })

            // Neu co loi thi thong bao
            if (errorMessage) {
                var formGroup = getParent(event.target, '.form-group');
                if (formGroup) {
                    formGroup.classList.add('invalid');
                    var formMessage = formGroup.querySelector('.form-message')
                    if (formMessage) {
                        formMessage.innerText = errorMessage;
                    }
                }
            }
        }

        // Ham clear error message
        function handleClearError(event) {
            var formGroup = getParent(event.target, '.form-group');

            if (formGroup.classList.contains('invalid')) {
                formGroup.classList.remove('invalid');

                if (formGroup) {
                    var formMessage = formGroup.querySelector('.form-message')

                    if (formMessage) {
                        formMessage.innerText = '';
                    }
                }
            }
        }

        console.log(formRules);
    }
}