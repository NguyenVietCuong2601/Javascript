"use strict";
// Function Expression
// // IIFE
(function (message) {
    console.log('Message: ', message);
})('Chao ban');

(() => {
    console.log('NOW!')
});

let i = 0;
(function myFunc() {
    i++;
    console.log(i);

    if (i < 10) {
        myFunc();
    }
});

(function() {
    let fullName = 'Cuong Nguyen'
    console.log(fullName);
});

const app = (function () {
    // Private
    const cars = []

    return {
        get (index) {
            return cars[index];
        },
        edit(index, car) {
            cars[index] = car;
        },
        add(car) {
            cars.push(car);
        },
        delete(index) {
            cars.splice(index, 1);
        }
    }
})()

// Scope -------------------------------------------------------------------------------------
// Global 
var message = "Hoc ve scope 2";
function logger() {
    console.log(message);
}
//logger();

// Code block 
{
    const age = 18;
    //console.log(age);
}

// Local scope 
function logger() {
    var fullName = 'Cuong Nguyen';
    console.log(fullName);

    function logger2() {
        var log2 = 'Log 2';
        console.log(log2);
    }

    logger2();
}
//logger();

// When a function is called, it always creates a new scope
function logger(first, last) {
    console.log(first, last);
}
//logger('Cuong', 'Nguyen'); 
// it will create a scope for logger function where first = Cuong and last = Nguyen

//logger('Son', 'Dang'); 
// the same as above but first = Son and last = Dang

// A function can access to the vars are declared inside its scope and outside its scope
//const fullName = "Long Nguyen";

function logger(first, last) {
    console.log(first, last);
    const age = 20;

    console.log(age, fullName);
}

//logger('Cuong', 'Nguyen');
//logger('Son', 'Dang'); 

// The method of accessing var
//const age = 18;
{
    const age = 16;
    {
        const age = 14;
        {
            const age = 12;
            //console.log(age);
        }
    }
}

// When is the var deleted (life cycle)
{
    const age = 16;
    //console.log(age);
}

function logger() {
    const rand = Math.random();
    console.log(rand);
}  

// The var in a function that is referenced by another function
function makeCounter() {
    let couter = 0;

    function increase() {
        return ++couter;
    }

    return increase;
}

const increase1 = makeCounter();
//console.log(increase1());
//console.log(increase1());
//console.log(increase1());

// Closure -----------------------------------------------------------------------------------
// A function can remember the place where it is created and accesses the var outside its scope
function createCounter() {
    let counter = 0;
    function increase() {
        return ++counter;
    }
    return increase;
}
// const counter1 = createCounter();
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());

function createLogger(namespace) {
    function logger(message) {
        console.log(`[${namespace}] ${message}`)
    }

    return logger;
}
 //================== App ===================
 
//  // Register.js
// const infoLogger = createLogger('Info');
// infoLogger('Bat dau gui mail');
// infoLogger('Gui mail loi lan 1, thu gui lai...');
// infoLogger('Gui mai thanh cong cho user xxx');

// // ForgotPassword.js
// const errorLogger = createLogger('Error');
// errorLogger('Email khong ton tai trong DB');
// errorLogger('Gui mail loi lan 1, thu lai...');
// errorLogger('Gui mail thanh cong cho user xxx');

function createStorage(key) {
    const store = JSON.parse(localStorage.getItem(key)) ?? {};

    const save = () => {
        localStorage.setItem(key, JSON.stringify(store));
    }

    const storage = {
        get(key) {
            return store[key];
        },
        set(key, value) {
            store[key] = value;
            save();
        },
        remove(key) {
            delete store[key];
            save();
        }
    }
    return storage;
}
// const profileSetting = createStorage('profile_setting');
// console.log(profileSetting.get('fullName'));
// profileSetting.set('fullName', 'Cuong Nguyen');
// profileSetting.set('age', 20);
// profileSetting.set('address', 'Da Nang');

// const profileSetting2 = createStorage('profile_setting_2');
// console.log(profileSetting2.get('fullName'));
// profileSetting2.set('fullName', 'Cuong Nguyen');
// profileSetting2.set('age', 20);
// profileSetting2.set('address', 'Da Nang');

function createApp() {
    const cars = [];

    return {
        get() {
            console.log(cars);
        },
        add(car) {
            cars.push(car);
        },
        delete(index){
            cars.splice(index, 1);
        }
    }
}
// const app1 = createApp();
// app1.get();
// app1.add('BMW');
// app1.get();

// Hoisting ----------------------------------------------------------------------------------
// Bring var declarations and function declarations to the top of the declared scope

// var age; => Just declare var top the top and dont assign its value
// console.log(age); // undefined
// console.log(fullName); // Reference error: fullName is not defined
// var age = 16;

// Function => bring all the function to the top => it can be used before declared
//console.log(sum(6, 9));
function sum(a, b) {
    return a + b;
}

// Let, Const => It is bringed to the top but it isnt assigned default value (Temporal Dead Zone)
{
    //console.log(fullName); // ReferenceError: Cannot access 'fullName' before initialization
    let fullName = 'Nguyen Van A';
} 

// Example:
{
    const counter1 = makeCounter()
    //console.log(counter1());
    function makeCounter() {
        let counter = 0;
        return increase;
        function increase() {
            return ++counter;
        }
    }
}

// Value types & Reference types -------------------------------------------------------------
// value types
{
    
    let a = 1;
    let b = a;
    a = 2;
    //console.log(b);
}

// reference types ------------------------------------------------
{
    // var a is assigned the address of the memmory area where it save the value
    let a = {
        name: 'Mercedes',
    }
    let b = a; // b is assigned the address is saved in a
    a.name = 'BMW';
    //console.log(b); 
}

{
    // when a new object is created it will be assigned a new memmory area
    let a = {
        name: 'Mercedes',
    }

    a = { 
        name: 'BMW',
        type: 'car',
    }
}

{
    const student = {
        name: 'Cuong Nguyen',
        profile: {
            firstName: 'Cuong',
            lastName: 'Nguyen',
            age: '18'
        }
    }
    const studentProfile = student.profile;
    student.profile.age = '22';
    //console.log(studentProfile.age);
}


// Value types
{
    function sum(a, b) {
        // let a = c
        // let b = d
        //console.log(a, b)
    }
    const c = 1;
    const d = 2;
    sum(c, d);
}

// Reference types
{
    function func(obj) {
        obj.name = 'Mercedes';
        //console.log(obj);
    }
    const a = {
        name: 'BMW'
    }
    func(a);
    //console.log(a); // side effect
}

{
    function createCar(obj) {
        //obj = JSON.parse(JSON.stringify(obj));
        obj = {...obj}
        obj.name = 'Mercedes';
        return obj;
    }
    const a = {
        name: 'BMW',
    }
    const newCar = createCar(a);
    //console.log(a);
    //console.log(newCar);
}

// "This" - keyword --------------------------------------------------------------------------
// Inside a method, "this" references to an object that accesses method (before the dot)
{
    const iPhone7 = {
        // Property - Thuoc tinh
        name: 'iPhone7',
        color: 'Pink',
        weight: 300,

        // Method - Phuong thuc
        takePhoto() {
            console.log(this)
        },
        objChild: {
            name: 'Child Object',
            methodChild() {
                console.log(this)
            }
        }
    }
    //console.log(iPhone7.takePhoto());
    //console.log(iPhone7.objChild.methodChild());
}

{
    // "This" in function creator represents the created object
    function Car(name, color, weight) {
        this.name = name;
        this.color = color;
        this.weight = weight;
        this.run = function() {
            console.log('Running...', this);
        }
    }
    Car.prototype.run2 = function() {
        // Context
        // if "This" in a function it will reference to window object but in strict mode it will be undefined
        function test() {
            console.log(this);
        }
        test();
    }   

    const mercedesS450 = new Car('Mercedes S450', 'black', 1200);
    //console.log(mercedesS450.run());
    //console.log(mercedesS450.run2());
}

{
    const button = document.querySelector('button');
    //console.log(button);
    // button.onclick = function() {
    //     console.dir(this);
    // }
}

// Outside a method, "this" references to global object
//console.log(this);
{
    // in strict mode this will return undefined
    function myFunc() {
        console.log(this);
    }
    //myFunc();
}