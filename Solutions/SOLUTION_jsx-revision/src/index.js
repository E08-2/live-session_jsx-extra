// 1. Use a npm command to install all the node modules your project will need to run properly.

// 2. Import React to use JSX
import React from "react";

// 3. Import ReactDOM to render your JSX in the DOM
import ReactDOM from "react-dom";

// 4. Select a HTML element from "index.html" to render your JSX content inside
const root = document.querySelector("#root");

// 5A. Create a variable called "firstJSX". 
// 5B. The value of the variable should be a JSX div, with the class "myDiv" and content "I am a JSX div".
// 5C. Your JSX div should also use inline styling so that the text is colored red and the background color is yellow.
const firstJSX = (
    <div className="myDiv" style={ {color: "red", backgroundColor: "yellow"} }>I am a JSX div</div>
);

// 7A. Create a variable called "text", with the string value: "The current year is ".
// 7B. Create a variable called "num" with the number value: 2022.
// 7C. Create a variable called "secondJSX".
// 7D. The value of "secondJSX" should be a JSX div. Inside the div, use the "text" and "num" variables to render the below content:
//   The current year is 2022
// 7E. Use ReactDOM to render "secondJSX" instead of "firstJSX" and make sure you see what you expect.
const text = "The current year is ";
const num = 2022;
const secondJSX = <div>{text + num}</div>;

// 8A. Create a variable called "listItemArray".
// 8B. The value of the variable should be an array, containing three JSX list-item elements.
// 8C. The content of each element should be "First list item", "Second list item" and "third list item".
// 8D. Create a variable called "unorderedList".
// 8E. The value of the variable should be a JSX unordered-list element.
// 8F. Inside the unordered list, use the "listItemArray" element to render all the list-items.
// 8G. Use ReactDOM to render "unorderedList" instead of "secondJSX" and make sure you see what you expect.
const listItemArray = [
    <li>First list item</li>,
    <li>Second list item</li>,
    <li>Third list item</li>
];

const unorderedList = <ul>{listItemArray}</ul>;

// * 9. How can I display more than one JSX element on the page at the same time?

// ! Will not work - ReactDOM can only render one (parent) element!
// const allElements = (
//     <div>I am a div</div>
//     <div>I am a second div</div>
// );

// * Solution 1
// const allElements = (
//     <div className="container">
//         {firstJSX}
//         {secondJSX}
//         {unorderedList}
//         <div className="child"> 
//             <div className="grandchild">I am a grandchild</div>
//         </div>
//     </div>
// )

// * Solution 2
// Sometimes you may not want to add a new <div> element to your DOM
// Or sometimes, using a div in this way will not work - e.g. trying to render <tr>s inside a div won't work!
// In both cases you can use a React Fragment to contain your JSX
const allElements = (
    // <React.Fragment> --> Long version (short version on next line!)
    <>
        {firstJSX}
        {secondJSX}
        {unorderedList}
    </>
    // </React.Fragment>
);

// ===============================================================================================

// 6A. Use ReactDOM to render your JSX content in the DOM
// 6B. When you are done, use "npm" to start your React app and see if it is working as expected

//              what      where
ReactDOM.render(allElements, root);