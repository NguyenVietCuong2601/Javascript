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

Array.isArray([]); //true
Array.isArray({}); //false
Array.isArray('asd'); //false

var languages = [
    'Javascript',
    'PHP',
    'Ruby',
];

var languages2 = [
    '1',
    '2'
];

// console.log(languages.toString());
// console.log(languages.join(' '));
// console.log(languages.pop()); //xoa element cuoi mang va tra ve no
// console.log(languages);
// console.log(languages.push('Dart', 'C++'));
// console.log(languages);
// console.log(languages.shift());
// console.log(languages);
// console.log(languages.unshift('C','HTML'));
// console.log(languages);
// languages.splice(1, 0, 'Dart', 'Java')
// console.log(languages);
console.log(languages.concat(languages2));
console.log(languages.slice(-2, -1));
