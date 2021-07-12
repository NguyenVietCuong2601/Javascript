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
// function logger(log) {
//     // ES5
//     if (typeof log === 'undefined') {
//         log = 'Gia tri mac dinh';
//     }
    
//     console.log(log);
// }

// function logger(log, type = 'log') {
//     // ES6
//     console[type](log);
// }

// logger('Message', 'warn');

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

// var fieldName = 'name';
// var fieldPrice = 'price';

// const course = {
//     [fieldName]: 'Javascript',
//     [fieldPrice]: 1000
// }

// console.log(course);

// Destructuring -----------------------------------------------------------------------------
// var array = ['Javascript', 'PHP', 'Ruby'];

// var a = array[0];
// var b = array[1];
// var c = array[2];

// var [a, b, ...rest] = array;

// console.log(a);
// console.log(rest);

// var course = {
//     name: 'Javascript',
//     price: 1000,
//     image: 'image-address',
//     children: {
//         name: 'ReactJS'
//     }
// }

// var {name,...rest} = course;
// var {name: parentName, children: {name}} = course
// console.log(parentName);
// console.log(name);

// var {name, description = 'default description'} = course;

// console.log(name);
// console.log(description);

// function logger(...params) {
//     console.log(params);
// }

// console.log(logger(1,2,3,4,5,6,7));

// function logger({name, price, ...rest}) {
//     console.log(name);
//     console.log(price);
//     console.log(rest);
// }

// logger ({
//     name: 'Javascript',
//     price: 1000,
//     description: 'Description content'
// })

// function logger([a, b, ...rest]) {
//     console.log(a);
//     console.log(b);
//     console.log(rest);
// }

// logger([2, 6, 7, 3, 1, 1])

// Spread ------------------------------------------------------------------------------------
// var array1 = ['Javascript', 'PHP', 'Ruby'];
// var array2 = ['ReactJS', 'Dart'];

// var array3 = [...array2, ...array1];

// console.log(array3);

// var object1 = {
//     name: 'Javacript'
// }
// var object2 = {
//     price: 1000
// }
// var object3 = {
//     ...object1,
//     ...object2
// }

// console.log(object3);

// var array = ['Javascript', 'PHP', 'Ruby', 'ReactJS'];

// function logger(...rest) {
//     for (var i = 0; i < rest.length; i++) {
//         console.log(rest[i]);
//     }
// }

// logger(...array);

// Tagged template literals ------------------------------------------------------------------
// function highlight(...rest) {
//     console.log(rest);
// }

// var brand = 'f8';
// var coures = 'JavaScript';

// highlight`Hoc lap trinh ${coures} tai ${brand}!`;

// function highlight([first, ...strings], ...values) {
//     return values.reduce(
//         (acc, curr) => [...acc, `<span>${curr}</span>`, strings.shift()],
//         [first]
//     ).join('');
// }



// var brand = 'f8';
// var coures = 'JavaScript';

// const html = highlight`Hoc lap trinh ${coures} tai ${brand}!`;

// console.log(html);

// Modules -----------------------------------------------------------------------------------
// Import / Export
import {logger2} from './logger/index.js';
// import {
//     TYPE_LOG,
//     TYPE_WARN,
//     TYPE_ERROR
// } from './constants.js';
import * as constants from './constants.js';

// console.log(constants.TYPE_ERROR);
// logger2('test message...', constants.TYPE_WARN);

// Optional chaining (?.) --------------------------------------------------------------------
// const obj = {
//     name: 'Alice',
//     cat: {
//       name: 'Dinah',
//       cat2: {
//         name: 'Dinah 2',
//         cat3: {
//             name: 'Dinah 3'
//             }
//         }
//     }
// };

// if (obj.cat?.cat?.cat2?.cat3) {
//     console.log(obj.cat.cat2.cat3.name);
// }

const obj = { 
    // getName(value) {
    //     console.log(value)
    // }
}

obj.getName?.(123);

// De quy ------------------------------------------------------------------------------------
// 1. Xac dinh diem dung
// 2. Logic handle => Tao ra diem dung

// var array = ['a', 'b', 'c', 'a', 'b', 'c'];
// console.log([...new Set(array)]);

// function countDown(num) {
//     if (num > 0) {
//         console.log(num);
//         return countDown(num - 1);
//     }
//     return num;
// }

// function loop(start, end, cb) {
//     if (start < end) {
//         cb(start);
//         return loop(start + 1, end, cb);
//     }
// }

// var array = ['Javascript', 'PHP', 'Ruby'];

// loop(0, array.length, function(index) {
//     console.log(array[index]);
// });

// function giaiThua(number) {
//     if (number > 0) {
//         return number * giaiThua(number - 1);
//     }
//     return 1;
// }

// console.log(giaiThua(6))

// Polyfill ----------------------------------------------------------------------------------
if (!String.prototype.includes) {
    String.prototype.includes = function(search, start) {
      'use strict';
  
      if (search instanceof RegExp) {
        throw TypeError('first argument must not be a RegExp');
      }
      if (start === undefined) { start = 0; }
      return this.indexOf(search, start) !== -1;
    };
}