// 1. Var / Let, Const: Scope, Hosting--------------------------------------------------------
// Code block: if else, loop, {}, ...

// Scope: 
// {
//     var course = 'Javascript basic!';

//     {
//         {
//             console.log(course);
//         }
//     }
// }

// // Hosting: chi ho tro var
// var a = 1; // var a; a = 1
// b = 1;
// var b; // Dua dinh nghia bien len trc tien

// // 2. Const / Var, Let: Assignment------------------------------------------------------------
// var a = 1;
// a = 100; // ok

// const b = 10;
// b = 100; // error

// Code thuan: var
// Babel: const, let
// ==> Khi dinh nghia bien va khong gan lai: Const
// ==> Khi gan lai gia tri cho bien : let

// Template Literals & Multi-line String -----------------------------------------------------
// const courseName = 'Javascript';
// const description = `Course name: ${courseName}`;
// const lines1 = 'line1\nline2';
// const lines2 = `line 1
// line 2
// line 3`;

// Arrow function ----------------------------------------------------------------------------
// const logger = (log) => console.log(log);

// logger('message');

// const sum = (a, b) => ({a: a, b: b})

// console.log(sum(2, 2));

// const course = {
//     name: 'Javascript basic',
//     getName: function() { 
//         return this.name; // context
//     }
// }

// console.log(course.getName());

// Classes -----------------------------------------------------------------------------------
// function Courses(name, price) {
//     this.name = name;
//     this.price = price;
//     this.getName = function() {
//         return this.name;
//     }
// }

// class Courses {
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//     }

//     getName() {
//         return this.name;
//     }

//     getPrice() {
//         return this.price;
//     }
// }

// const phpCourses = new Courses('PHP', 1000);
// const jsCourses = new Courses('Javascript', 1000);

// console.log(phpCourses.getName());
// console.log(jsCourses.getPrice());

// Default Parameter values ------------------------------------------------------------------
function logger(log) {
    // ES5
    if (typeof log === 'undefined') {
        log = 'Gia tri mac dinh';
    }
    
    console.log(log);
}

function logger(log, type = 'log') {
    // ES6
    console[type](log);
}

logger('Message', 'warn');

// Enchanced object literals -----------------------------------------------------------------
// 1. Dinh nghia key: value cho object
// 2. Dinh nghia method cho 1 object 
// 3. DInh nghia key cho object duoi dang bien

// var name = 'Javascript';
// var price = 1000;

// var course = {
//     name: name,
//     price: price
// }

// var course = {
//     name,
//     price,
//     getName() {
//         return name;
//     }
// }

// console.log(course.getName());

var fieldName = 'name';
var fieldPrice = 'price';

const course = {
    [fieldName]: 'Javascript',
    [fieldPrice]: 1000
}

console.log(course);