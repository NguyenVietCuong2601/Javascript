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

var fullName = 'Cuong Dolar';

//Template String
var firstName = 'Cuong',
    lastName = 'Nguyen';

//Lam viec voi chuoi
// 1. length
// 2. find index
// 3. Cut String
var title = "'Học Javascript tại F8'"
console.log(title.slice(5,15))
console.log(title.slice(-7,-1))
// 4. Replace
// 5. Convert to upper case
// 6. Convert to lower case
// 7. Trim
// 8. Split
// 9. Get a character by index
var a = title.search('Javascript')
var language = title.slice(a, a+10),
    rest = title.slice(a+11);
