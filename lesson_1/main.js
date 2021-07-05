
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
// var btn = document.querySelector('#btn');

// function viec1() {
//     console.log('Viec 1');
// }

// function viec2() {
//     console.log('Viec 2');
// }

// btn.addEventListener('click', viec1);
// btn.addEventListener('click', viec2);

// setTimeout(function () {
//     btn.removeEventListener('click', viec1);
// }, 3000);

// JSON (JavaScript Object Notation) ---------------------------------------------------------
// Stringify: Tu JS types -> JSON
// Parse: Tu JSON -> JS types

// var json = '["Javascript","PHP"]';
// var json = '{"name":"Cuong","age":22}';

// console.log(JSON.stringify({
//     name: 'Cuong',
//     age: 22
// }))

// Promise(sync, async) ----------------------------------------------------------------------
/**
 * Async: setTimeout, setInterval, fetch, XMLHttpRequest, file reading,
 *        request animation frame
 * 
 * Callback -> Callback hell ?
 * Pyramid of doom ?
 * 
 */
// 1. new Promise
// 2. Executor

// 1.Pendding
// 2.Fulfilled
// 3.Reject

// var promise = new Promise(
//     //Excutor
//     function(resolve, reject) {
//         //Logic
//         //Thanh cong: resolve()
//         //That bai: reject()

//         //Fake call API
//         // resolve([
//         //     {
//         //         id: 1,
//         //         name: 'Javascript'
//         //     }
//         // ]);

//         //reject('Ma loi!');
//         resolve();
//     }
// );

// promise chain -----------------------------------------------------------------------------
//     .then(function() {
//         return new Promise(function(resolve) {
//             setTimeout(function() {
//                 resolve([1,2,3]);
//             }, 3000);
//         })
//     })
//     .then(function(data) {
//         console.log(data);
//         return 2;
//     })
//     .catch(function(error) {
//         console.log(error);
//     })
//     .finally(function() {
//         console.log('Done!');
//     })

// Promise (resolve, reject, all) ------------------------------------------------------------
// function sleep(ms) {
//     return new Promise(function(resolve) {
//         setTimeout(resolve, ms);
//     })
// }

// sleep(1000)
//     .then(function(){
//         console.log(1);
//         return sleep(1000);
//     })
//     .then(function(){
//         console.log(2);
//         return new Promise(function(resolve, reject) {
//             reject('Co loi!');
//         });
//     })
//     .then(function(){
//         console.log(3);
//         return sleep(1000);
//     })
//     .then(function(){
//         console.log(4);
//         return sleep(1000);
//     })
//     .catch(function(err) {
//         console.log(err);
//     })

// 1, Promise.resolve
// 2. Promise.reject
// 3. Promise.all

// var promise = new Promise(function(resolve, reject) {
//     //resolve('Success!');
//     reject('Error!')
// })

//var promise = Promise.resolve('Success!');
//var promise = Promise.reject('Error!');

// promise
//     .then(function(result) {
//         console.log(result);
//     })
//     .catch(function(err) {
//         console.log(err);
//     })

// var promise1 = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve([1]);
//     }, 2000);
// })

// var promise2 = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve([2, 3]);
//     }, 5000);
// })

// var promise3 = Promise.reject('Co loi!');

// Promise.all([promise1, promise2, promise3])
//     .then(function(result) {
//         var result1 = result[0];
//         var result2 = result[1];
        
//         console.log(result1.concat(result2));
//     })
//     .catch(function(err) {
//         console.log(err);
//     })

// Promise example ---------------------------------------------------------------------------

// var users = [
//     {
//         id: 1,
//         name: 'Kien Dam',
//     },
//     {
//         id: 2,
//         name: 'Cuong'
//     },
//     {
//         id: 3,
//         name: 'Son Dang'
//     }
//     //...
// ];

// var comments = [
//     {
//         id: 1,
//         user_id: 1,
//         content: 'abcdzxawd :))'
//     },
//     {
//         id: 2,
//         user_id: 2,
//         content: 'hi hi :))'
//     },
//     {
//         id: 3,
//         user_id: 3,
//         content: 'OK em :3'
//     }
// ];

// Fake API
// 1. Array
// 2. Function
// 3. Promise
// 4. DOM

// function getComments() {
//     return new Promise(function(resolve) {
//         setTimeout(function() {
//             resolve(comments);
//         }, 1000)
//     })
// };

// function getUsersByIds(userIds) {
//     return new Promise(function(resolve) {
//         var result = users.filter(function(user) {
//             return userIds.includes(user.id);
//         })
//         setTimeout(function() {
//             resolve(result);
//         }, 1000)
//     })
// }

// getComments()
//     .then(function(comments) {
//         var userIds = comments.map(function(comment) {
//            return comment.user_id;
//        })

//         return getUsersByIds(userIds)
//             .then(function(users) {
//                 return {
//                     users: users,
//                     comments: comments
//                 }
//             })
//     })
//     .then(function(data) {
        
//         var commentBlock = document.getElementById('comment-block');

//         var html = '';

//         data.comments.forEach(function(comment) {
//             var user = data.users.find(function(user) {
//                 return user.id === comment.user_id;
//             })
//             html += `<li>${user.name}: ${comment.content}</li>`;
//         });

//         commentBlock.innerHTML = html;
//     })

// Fetch -------------------------------------------------------------------------------------
// API (URL) -> Application programing interface
// Cong giao tiep giua cac PM
// Backend -> API (URL) -> Fetch -> JSON/XML
// -> JSON.parse -> JS types
// -> Render ra giao dien voi HTML

// var postApi = 'https://jsonplaceholder.typicode.com/posts';

//     //stream
// fetch(postApi)
//     .then(function(response) {
//         return response.json(); // JSON.parse
//     })
//     .then(function(posts) {
//         var htmls = posts.map(function(post) {
//             return `<li>
//                 <h2>${post.title}</h2>
//                 <p>${post.body}</p>
//             </li>`;
//         });

//         var html = htmls.join('');
//         document.getElementById('post-block').innerHTML = html;
//     })
//     .catch(function(err) {
//         console.log(err);
//     })

// JSON server: API server (Fake) ------------------------------------------------------------
// var courseApi = 'http://localhost:3000/courses'

// fetch(courseApi)
//     .then(function(res) {
//         return res.json();
//     })
//     .then(function(courses) {
//         console.log(courses);
//     })

// Example -> Post, Get, Put, Delete ---------------------------------------------------------


var courseApi = 'http://localhost:3000/courses';

function start() {
    getCourses(renderCourses);

    handleCreateForm();
}

start();

// Functions

function getCourses(callback) {
    fetch(courseApi)
        .then(function(res) {
            return res.json();
        })
        .then(callback);
}

function createCourse(data, callback) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(courseApi, options)
        .then(function(res) {
            res.json();
        })
        .then(callback);
}

function handleDeleteCourse(id) {
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    fetch(courseApi + '/' + id, options)
        .then(function(res) {
            res.json();
        })
        .then(function() {
            var courseItem = document.querySelector('.course-item' + id);
            if (courseItem) {
                courseItem.remove();
            }
        });
}

function renderCourses(courses) {
    var listCoursesBlock = document.querySelector('#list-courses');
    var htmls = courses.map(function(course) {
        return `
            <li class="course-item-${course.id}">
                <h4>${course.name}</h4>
                <p>${course.description}</p>
                <button onclick="handleDeleteCourse(${course.id})">Delete</button>
            </li>
        `;
    });

    listCoursesBlock.innerHTML = htmls.join('');
}

function handleCreateForm() {
    var createBtn = document.querySelector('#create');

    createBtn.onclick = function() {
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;
        
        var formData = {
            name: name,
            description: description
        };

        createCourse(formData, function() {
            getCourses(renderCourses);
        });
    }
}

