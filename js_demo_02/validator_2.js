
function Validator(formSelector) {
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
                if (rule.includes(':')) {
                    var ruleInfo = rule.split(':');

                    rule = ruleInfo[0];
                }
                console.log(rule);
            }

            formRules[input.name] = input.getAttribute('rules');
        }

        console.log(formRules);
    }
}