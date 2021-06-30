
// HTML DOM

// Co 3 thanh phan

/**
 * 1. Element: ID, class, tag, CSS selector, HTML collection 
 * 2. Attribute
 * 3. Text
 */

// -------------------------------------------------------------------------------------------

// Javascript: Browser | Server (NodeJS)

// Browser: HTML -> DOM -> Web API

// var headingNode = document.getElementById('heading');

// var headingNodes = document.getElementsByTagName('p');

// var headingNode = document.querySelector('.heading')

// console.log({
//     element: headingNode
// });

// Làm bài tập tại đây

// var boxHTMLCollection = document.getElementsByClassName('box');
// var box1Element = document.querySelector('.box:first-child');
// var box2Element = document.querySelector('.container .box:nth-child(2)');
// var allItemElements = document.getElementsByTagName('li');
// var box1ItemElements = box1Element.getElementsByTagName('li');
// var box2ItemElements = box2Element.getElementsByTagName('li');

// var h1Element = document.querySelector('h1');
// var h2Element = document.querySelector('h2');
// var h3Element = document.querySelector('h3');

// DOM Attribute -----------------------------------------------------------------------------

//var headingElement = document.querySelector('h1');

//headingElement.setAttribute('data', 'test-data');

//console.log(headingElement.getAttribute('class'));
//console.log(headingElement.getAttribute('data'));

// innerText, textContent --------------------------------------------------------------------

//var headingElement = document.querySelector('h1.heading');

//headingElement.innerText = 'New heading';

//console.log(headingElement.innerText);
//console.log(headingElement.textContent);

//console.log(headingElement);
//headingElement.innerText = '<i>New heading</i>';

// InnerHTML, OuterHTML-----------------------------------------------------------------------

//var boxElement = document.querySelector('.box');

//boxElement.innerHTML = '<span>Test</span>';
//boxElement.outerHTML = '<span>Test</span>'

//console.log(boxElement.outerHTML);
//console.log(document.querySelector('h1').innerText);

// DOM CSS -----------------------------------------------------------------------------------

// var boxElement = document.querySelector('.box');

// Object.assign(boxElement.style, {
//     width: '100px',
//     height: '200px',
//     backgroundColor: 'red',
// })

// console.log(boxElement.style.backgroundColor);

// ClassList property ------------------------------------------------------------------------
/**
 * add
 * contains
 * remove
 * toggle
 */
// var boxElement = document.querySelector('.box');

// boxElement.classList.add('red');

// setInterval(() => {
//     boxElement.classList.toggle('red');
// }, 1000);

//DOM events ---------------------------------------------------------------------------------
//1. Attribute events
//2. Assign event using the element node

// var h1Elements = document.querySelectorAll('h1');

// for (var i = 0; i < h1Elements.length; i++) {
//     h1Elements[i].onclick = function(e) {
//         console.log(e.target);
//     }
// }

// 1. Input / Select -------------------------------------------------------------------------
// var inputValue;

// var inputElement = document.querySelector('input[type="text"]');

// inputElement.onkeydown = function(e) {
//     inputValue = e.target.value;
//     console.log(inputValue);
// }

// 2. Key up /down ---------------------------------------------------------------------------
// document.onkeydown = function(e) {
//     console.log(e.which)
//     switch(e.which) {
//         case 27:
//             console.log('exit');
//             break;
//     }
// }

// 3. preventDefault -------------------------------------------------------------------------
// var aElements = document.links;

// for (var i = 0; i < aElements.length; i++) {
//     aElements[i].onclick = function(e) {
        
//         if (!e.target.href.startsWith('https://f8.edu.vn')) {
//             e.preventDefault();
//         }
//     }
// }

// var ulElement = document.querySelector('ul');

// ulElement.onmousedown = function(e) {
//     e.preventDefault();
// }

// ulElement.onclick = 
//     function(e) {
//         console.log(e.target);
//     }

// 4. stopPropagation ------------------------------------------------------------------------
// document.querySelector('div').onclick = function(e) {
//     console.log('DIV');
// }

// document.querySelector('button').onclick = function(e) {
//     e.stopPropagation();
//     console.log('Click me!');
// }

// Event Listener ----------------------------------------------------------------------------

// 1. Xu ly nhieu viec khi 1 event xay ra
// 2. Lang nghe / Huy bo lang nghe
var btn = document.querySelector('#btn');

function viec1() {
    console.log('Viec 1');
}

function viec2() {
    console.log('Viec 2');
}

btn.addEventListener('click', viec1);
btn.addEventListener('click', viec2);

setTimeout(function () {
    btn.removeEventListener('click', viec1);
}, 3000);