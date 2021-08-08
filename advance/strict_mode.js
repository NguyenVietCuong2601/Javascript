"use strict"; // Khai bao strict mode

// Cannot assign variables without using var, let, const--------------------------------------
var fullName = "Nguyen Van A";
function testFunc() {
   var age = 18;
}
testFunc();
//console.log(fullName);
//console.log(age);

// Error when assign value to attribution has writeable = false-------------------------------
const student = Object.freeze({
    fullName: 'Nguyen Van A',
})
//student.fullName = 'Nguyen Van B';
//console.log(student)

// Object.defineProperty(student, 'fullName', {
//     value: 'Nguyen Van B',
//     writable: true, 
// }) => (default: writeable = false)
// => const student = { fullName: 'Nguyen Van B'}; (writeable = true)

// Error when a function has duplicate parameter name----------------------------------------
// function sum(a, a) {
//     return a + a;
// }

// Function is belongs to code block When assigned in code block -----------------------------
{
    function sum(a, b) {
        return a, b;
    }
}
//console.log(sum(9, 6));
