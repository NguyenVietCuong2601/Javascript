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
const fullName = "Long Nguyen";

function logger(first, last) {
    console.log(first, last);
    const age = 20;

    console.log(age, fullName);
}

//logger('Cuong', 'Nguyen');
//logger('Son', 'Dang'); 

// The method of accessing var
const age = 18;
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