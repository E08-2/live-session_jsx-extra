import React from "react";
import ReactDOM from "react-dom";

// * Using JSX with .map()

// * Revision

// .map() is an array method in JavaScript
// It lets you loop through an array, and do something to each array item
// Finally, it will return a new array, with the changed items inside it

let numbers = [1, 2, 3, 4];

// In a single line ES6 function, we don't need a "return" statement for each loop
let numbersMultipliedBy10 = numbers.map(num => num * 10);

console.log(`Original array: ${numbers}`);
console.log(`Mapped array ${numbersMultipliedBy10}`);
console.log(typeof numbers);
console.log(typeof numbersMultipliedBy10)

// But if we use curly braces, we do need a "return" statement for each loop
let numbersMultipliedBy10Alt = numbers.map(num => {
    return num * 10;
})

console.log(`Mapped array v2: ${numbersMultipliedBy10Alt}`);

// ===============================================================================

// * .map() and JSX

// We can use .map() to create a list, which contains a JSX element for each item in an array.

// Using an array of simple objects as an example...

const root = document.querySelector("#root");

let namesArr = [
    { firstName: "Bob" },
    { firstName: "Wendy" }, 
    { firstName: "Paul" },
    { firstName: "Tarquin" }
];

// In this case, we can now use .map() to make an array full of JSX LIST ITEM elements, based on the above array:

// let jsxNames = namesArr.map(obj => <li>{obj.firstName}</li>)

// * Remember, that when you use .map() to create a list, you should give each new JSX element a "key" attribute

let jsxNamesWithKeys = namesArr.map((obj, index) => {
    return <li key={index}>{obj.firstName}</li>
})

let list = <ul>{jsxNamesWithKeys}</ul>

ReactDOM.render(list, root);