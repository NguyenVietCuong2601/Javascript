/*
Arithmetic
+ , - , * , / , % , ++ , --
** --> Luy thua;
*/

// Toan tu ++ --
// Prefix & Postfix

/*  VD: a
    Prefix: ++a
    - + 1 cho a, a = a+1 
    - Tra ve a sau khi duoc + 1

    Postfix: a++
    - copy a
    - cong 1 cho a, a = a-1
    - Tra ve copy a
*/

//Cac kieu du lieu

//Number
// var a = 1;
// console.log(typeof a);

// //String
// var a = 'Cuong';
// console.log(typeof a);

// //Boolean
// var a = true;
// console.log(typeof a);

// //Undefine
// var a;
// console.log(typeof a);

// //Null
// var a = null;
// console.log(typeof a);

// //Symbol
// var a = Symbol('abc');
// console.log(typeof a);

// //Function
// var a = function() {
//     alert('abcd');
// };
// console.log(typeof a);

// //Object
// var a = {
//     name: 'Cuong',
//     age: 22,
//     address: 'VN'
// };
// console.log(typeof a);

// //Array
// var a = [
//     '123',
//     '234',
//     '345'
// ]
// console.log(typeof a);

//------------------------------String---------------------------//

// var fullName = 'Cuong Dolar';

// //Template String
// var firstName = 'Cuong',
//     lastName = 'Nguyen';

// //Lam viec voi chuoi
// // 1. length
// // 2. find index
// // 3. Cut String
// var title = "'Học Javascript tại F8'"
// console.log(title.slice(5,15))
// console.log(title.slice(-7,-1))
// // 4. Replace
// // 5. Convert to upper case
// // 6. Convert to lower case
// // 7. Trim
// // 8. Split
// // 9. Get a character by index
// var a = title.search('Javascript')
// var language = title.slice(a, a+10),
//     rest = title.slice(a+11);

//-----------------------------Number-----------------------------//

// Number.isFinite(2 / 0); // false
// Number.isFinite(20 / 5); // true
// Number.isFinite(0 / 0); // false

// Number.isInteger(999999999); // true
// Number.isInteger(0.2);       // false
// Number.isInteger(Math.PI);   // false

// Number.parseFloat('10') // 10
// Number.parseFloat('10.00') // 10
// Number.parseFloat('238,21') // 238
// Number.parseFloat('237.22') // 237.22
// Number.parseFloat('34 56 78') // 34
// Number.parseFloat(' 37 ') // 37
// Number.parseFloat('18 is my age') // 18

// Number.parseInt('10') // 10
// Number.parseInt('10.00') // 10
// Number.parseInt('238,21') // 238
// Number.parseInt('237.22') // 237
// Number.parseInt('34 56 78') // 34
// Number.parseInt(' 37 ') // 37
// Number.parseInt('18 is my age') // 18

// var numberObject = 1234.56789;

// numberObject.toFixed(); // '1235'
// numberObject.toFixed(1); // '1234.6'
// numberObject.toFixed(6); // '1234.567890'

// (11).toString();    // '11'
// (18).toString();     // '18'
// (17.3).toString();   // '17.3'

//------------------------------Array------------------------------//

// Array.isArray([]); //true
// Array.isArray({}); //false
// Array.isArray('asd'); //false

// var languages = [
//     'Javascript',
//     'PHP',
//     'Ruby',
// ];

// var languages2 = [
//     '1',
//     '2'
// ];

// // console.log(languages.toString());
// // console.log(languages.join(' '));
// // console.log(languages.pop()); //xoa element cuoi mang va tra ve no
// // console.log(languages);
// // console.log(languages.push('Dart', 'C++'));
// // console.log(languages);
// // console.log(languages.shift());
// // console.log(languages);
// // console.log(languages.unshift('C','HTML'));
// // console.log(languages);
// // languages.splice(1, 0, 'Dart', 'Java')
// // console.log(languages);
// console.log(languages.concat(languages2));
// console.log(languages.splice());
// console.log(languages);

//-----------------------------Function-----------------------------//

// function showDialog() {
//     alert('Hi, xin chao cac ban');
// }

// showDialog();

// function writeLog() {
//     var myString = '';
//     for (var param of arguments) {
//         myString += `${param} - `;
//     }
//     console.log(myString);
// }

// // writeLog(1, 2, 3, 4);
// var needle = 'Hihi',
//     haystack = 'Cay JS tai F8';
// console.log(haystack.indexOf(needle));
// console.log(Boolean(haystack.indexOf(needle)));

// function showDialog() {

// } // Declaration function

// var showMessage = function name() {

// }

// setTimeout(function name() {

// });

// var myObject ={
//     myFunction: function name() {

//     }
// } // Expression function

//-----------------------------Object-----------------------------//
// var emailKey = 'email';

// var myInfo = {
//     name: 'Cuong',
//     age: 22,
//     address: 'Quang Nam',
//     [emailKey]: 'cuong@cuong.com',
//     getName: function() {
//         return this.name;
//     }
// };
// // function --> phuong thuc
// // others --> property

// myInfo['asd-asds'] = 'asdsad';

// console.log(myInfo)

// delete myInfo.age

// console.log(myInfo.getName())

// // Constructor---------------------------------------------

// function User(firstName, lastName, avatar) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;

//     this.getName = function() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// //var author = new User('Cuong', 'Nguyen', 'Avatar');
// var user = new User('Alo', 'Aba', 'Avatar');
// var user2 = new User('Luffy', 'Monkey.D', 'Avatar');

// //author.title = 'chia se tai f8';
// //user.comment = 'Ladasdasd'

// // console.log(author.getName());
// // console.log(user)
// // console.log(author.constructor === user.constructor);

// User.prototype.className = 'F8';
// User.prototype.getClassName = function() {
//     return this.className;
// }

// console.log(user.className);
// console.log(user2.getClassName());

// // Doi tuong Date---------------------------------------

// var date = new Date();

// console.log(date);

// var year = date.getFullYear();
// var month = date.getMonth() + 1;
// var day = date.getDate();

// console.log(`${day}/${month}/${year}`);

//----------------------------Switch----------------------------//
// var date = 9;

// switch(date) {
//     case 2:
//         console.log('Hom nay la thu 2');
//         break;
//     case 3:
//         console.log('Hom nay la thu 3');
//         break;
//     case 4:
//         console.log('Hom nay la thu 4');
//         break;
//     case 5:
//         console.log('Hom nay la thu 5');
//         break;
//     default:
//         console.log('Khong biet')
// }

// Ternary operator------------------------------------

// var course = {
//     name: 'Javascript',
//     coin: 250
// };

// if (course.coin > 0) {
//     console.log(`${course.coin} Coins`);
// } else console.log('Mien phi');

// var result = course.coin > 0 ? `${course.coin} Coins` : 'Mien phi';
// console.log(result);

// for loop------------------------------------------
// var myArray = [
//     'a',
//     'b',
//     'c',
//     'd'
// ];

// arraylength = myArray.length;

// for (var i = 0; i < arraylength; i++) {
//     console.log(myArray[i]);
// }

//For/in loop--------------------------------------

// var myInfo = {
//     name: 'Cuong',
//     age: 22,
//     address: 'Quang Nam'
// }

// var languages = [
//     'JS',
//     'PHP',
//     'Ruby',
//     'Java'
// ];

// var language = 'Javascript';

// for (var key in language) {
//     console.log(language[key]);
// }

//For/of loop--------------------------------------

// var languages = [
//     'JS',
//     'PHP',
//     'Ruby',
//     'Java'
// ];

// var myInfo = {
//     name: 'Cuong',
//     age: 22,
//     address: 'Quang Nam'
// }

// for (var value of Object.values(myInfo)) {
//     console.log(value)
// }

//while loop

// var i = 0;

// while (i < 1000) {
//     i++;
//     console.log(i);
// }

//Do/While loop---------------------------------------

// var i = 0;
// var isSuccess = false;

// do {
//     i++;
//     console.log('Nap the lan ' + i);

//     if (true) {
//         isSuccess = true;
//     }

// } while (i <= 3 && !isSuccess)

//Break & Continue in Loop------------------------------

// for (var i = 0; i < 10; i++){

//     if (i%2 !== 0) {
//         continue;
//     }
//     console.log(i);

//     // if (i >= 5) {
//     //     break;
//     // }
// }

//Nested loop-----------------------------------------
//  var myArray = [
//      [1, 2],
//      [3, 4],
//      [5, 6]
//  ];

//  for (var i = 0; i < myArray.length; i++) {
//      for (var j = 0; j < myArray[i].length; j++) {
//          console.log(myArray[i][j]);
//      }
//  }

/**
 * Array methods:
 *  forEach()
 *  every()
 *  some()
 *  find()
 *  filter()
 *  map()
 *  reduce()
 */

// var courses = [
//     {
//         id: 1,
//         name: 'Javascript',
//         coin: 250
//     },
//     {
//         id: 2,
//         name: 'HTML, CSS',
//         coin: 0
//     },
//     {
//         id: 3,
//         name: 'Ruby',
//         coin: 100
//     },
//     {
//         id: 4,
//         name: 'PHP',
//         coin: 300
//     },
//     {
//         id: 5,
//         name: 'C',
//         coin: 0
//     },
//     {
//         id: 6,
//         name: 'C++',
//         coin: 500
//     },
// ]

// courses.forEach(function(course, index) {
//     console.log(course)
// }); //call back

// var isFree = courses.some(function(course, index) {
//     return course.coin === 0;
// }); //call back

// var isFree = courses.find(function(course, index) {
//     return course.name === 'Ruby';
// }); //call back

// var isFree = courses.filter(function(course, index) {
//     return course.coin === 0;
// }); //call back

// console.log(isFree.length);

// var formValues = [
//     { field: 'name', value: 'Sơn Đặng' },
//     { field: 'age', value: 18 },
//     { field: 'address', value: 'Hà Nội' },
// ]

// var obj = {};
//         formValues.forEach(function(object){
//             obj[`${object.field}`] = object.value;
//         })
//     console.log(obj)

// var monsters = [
//     {
//         name: 'Cá heo',
//         attack: 50,
//         speed: 100,
//         hitpoint: 100,
//     },
//     {
//         name: 'Khủng long',
//         attack: 150,
//         speed: 80,
//         hitpoint: 180,
//     },
// ];

// var find = monsters.find(function(monster) {
//     return monster.attack === 150;
// })

// console.log(find)

// if (find === undefined) {
//     console.log('null');
// } else  console.log(find);

//map()---------------------------------------------------
// function courseHandler(course, index) {
//     return {
//         id: course.id,
//         name: `Khoa hoc: ${course.name}`,
//         coin: course.coin,
//         coinText: `Gia ${course.coin}`,
//         index: index,
//     }
// }

// var newCourses = courses.map(courseHandler);

// console.log(newCourses)

// var inputs = [1, 'hi', false, 8, undefined, '', NaN];

// var toBoolean = inputs.map(function(input) {
//     return Boolean(input);
// });

// console.log(toBoolean);

//reduce()-----------------------------------------------
// var i = 0;

// function coinHandler(accumulator, currentValue) {

//     i++
//     var total = accumulator + currentValue.coin;

//      console.table({
//         'Luot chay: ': i,
//         'Bien thich tru': accumulator,
//         'Gia khoa hoc': currentValue.coin,
//         'Tich tru duoc': total 
//      })

//     return total;
// }

// var totalCoin = courses.reduce(coinHandler, 0);

// console.log(totalCoin);

// var numbers = [1,2,3,4,5]

// var totalCoin = numbers.reduce(function(total, number) {
//     return total + number;
// });

//Flat
// var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

// var flatArray = depthArray.reduce(function(flatOutput, depthItem){
//     return flatOutput.concat(depthItem);
// }, []);

// var topics = [
//     {
//         topic: 'Front-end',
//         courses: [
//             {
//                 id: 1,
//                 title: 'HTML, CSS'
//             },
//             {
//                 id: 2,
//                 title: 'Javascript'
//             }
//         ]
//     },
//     {
//         topic: 'Back-end',
//         courses: [
//             {
//                 id: 1,
//                 title: 'PHP'
//             },
//             {
//                 id: 2,
//                 title: 'NodeJS'
//             }
//         ]
//     }
// ];

// var newCourse = topics.reduce(function(course, topic){
//     return course.concat(topic.courses)
// }, [])

// console.log(newCourse);

// var htmls = newCourse.map(function(course){
//     return `
//         <div>
//             <h2>${course.title}</h2>
//             <p>ID: ${course.id}</p>
//         </div>
//     `;
// });

// console.log(htmls.join(''))

//Reduce medthods----------------------------------------------------

// Array.prototype.reduce2 = function(callback, result) {
//     let i = 0
//     if (arguments.length < 2) {
//         i = 1;
//         result = this[0];
//     }
//     for (; i < this.length; i++) {
//        result = callback(result, this[i], i, this)
//     }
//     return result;
// }

// const numbers = [1, 2, 3, 4, 5]

// const result = numbers.reduce2(function(total, number) {
//     return total + number;
// })

// console.log(result)

//includes method----------------------------------------------------

var title = 'Responsive web design';

console.log(title.include('web', 1));

var courses = ['JS', 'PHP', 'Dart'];

// neu chi so am thi = length + chi so am --- VD: 3 + -1 = 2
console.log(courses.includes('JS', -1))