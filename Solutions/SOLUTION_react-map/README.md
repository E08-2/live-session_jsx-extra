# React Revision - map

## Instructions

1. Create a JSX `<div>` element in `index.js` and assign it to a **variable** with the name of `container`. Also give the `<div>` a `className` of "container".

2. Create a variable called `title`. This should have a string value of "Our goals for today:". Next, create a variable called `goals`. This should have a number value of `3`.

3. Create two more JSX elements, a `<h1>` and a `<h3>` as **children** of your `container` `<div>`. You should use the two **variables** from Part 2 to create the content of the new elements. The `title` variable should be used as the content of the `<h1>`, while you should write: "Number of goals: " inside the `<h3>`, followed by the `goals` variable.

4. Create a new variable called `goalsList`. This should be an array, containing the following strings:

```js
"Remind ourselves how to create JSX elements",
"Learn how to write a class-based component",
"Learn how to write a functional component"
```

5. Create a new variable called `mappedGoalsList`. This should contain the result of calling `.map()` on your `goalsList` array (from Part 4). 

Each time `.map()` iterates through one of the strings inside `goalsList`, it should return a new `<li>` element with the content of that string.

6. Create a `<ul>` element as a **child** of your `container` `<div>`. Use the `mappedGoalsList` variable you created in Part 5 as the content of the `<ul>`.

7. Finally, use `ReactDOM.render()` to render your JSX code in `index.html`.