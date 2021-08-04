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
    console.log(age);
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

console.log(increase1());
console.log(increase1());
console.log(increase1());