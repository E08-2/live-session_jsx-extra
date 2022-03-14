import React from "react";
import ReactDOM from "react-dom";

const root = document.querySelector("#root");

const title = "Our goals for today";
const goals = 3;

const goalsList = [
    "Remind ourselves how to create JSX elements",
    "Learn how to write a class-based component",
    "Learn how to write a functional component"
]

const mappedGoalsList = goalsList.map((str, index) => {
    return <li key={index} className="myClass">{str}</li>
})

const container = (
    <div className="container">
        <h1>{title}</h1>
        <h3>Number of goals: {goals}</h3>
        <ul>{mappedGoalsList}</ul>
    </div>
);

ReactDOM.render(container, root);

// =====================================================

// * Extra questions code:

// const exampleNamesArray = [
//     {id: 1, firstName: "Howard", lastName: "Moon"},
//     {id: 2, firstName: "Vince", lastName: "Noir"}
// ]

// const mappedNameList = exampleNamesArray.map(obj => <li key={obj.id}>First Name: {obj.firstName}, Last Name: {obj.lastName}</li>)

// /* 
// * mappedNameList:
// [
//     <li>First Name: Howard, Last Name: Moon</li>,
//     <li>First Name: Vince, Last Name: Noir</li>,
// ]
// */