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