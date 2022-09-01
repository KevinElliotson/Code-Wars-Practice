// Targeting HTML elements in our HTML document so we can manipulate them with JavaScript

// Targetting by ID
// HTML example: <button id="p1Button">+1 Player One</button>

const p1Button1 = document.querySelector('#p1Button');
// targets the button in our HTML doc with the id "p1Button" and saves it to a variable. IDs are unique, so they can only be attached to one element
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

// could also use Document.getElementById()
const p1Button2 = document.getElementById('p1Button')
// https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById


// Targetting by Class
// HTML example: <button class="p2Button">+1 Player Two</button>

const p2Button1 = document.querySelector('.p2Button')
// targets the first element in our HTML doc with the class "p2Button" and saves it to a variable. Classes can be attached to multiple elements, but when targetted with
// .querySelector, it only targets the first element with the given class

// Using Document.getElementsByClassName() allows us to target all or one element with the given class or even multiple classes
const p2Button2 = document.getElementsByClassName('p2Button') // targets all elements with the "p2Button" class
const p2Button2 = document.getElementsByClassName('p2Button')[0] // targets the 0th  element with the "p2Button" class, 0th being the first element in the doc with index counting
const p2Button3 = document.getElementsByClassName('p1Button p2Button') // targets all elements with either the "p1Button" or "p2Button" class
const p2Button4 = document.getElementById('p1Button').getElementsByClassName('p2Button') // targets all elements with the "p2Button" class inside an the element with the
// "p1Button" id

const p1Display = document.querySelector('#p1Display')
// targets the element with the class "p1Display" and saves it to a variable
let p1Score = 0;
p1Button.addEventListener('click', function(){
// .addEventListener applies a function when an "event" is performed, such as clicking a button. So this function is called every time the "p1Button" is clicked
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
// List of events: https://www.w3schools.com/jsref/dom_obj_event.asp
    p1Score += 1;
    p1Display.textContent = p1Score;
    // changes the .textContent of "p1Display" to whatever "p1Score" is equal to when the function is called
})