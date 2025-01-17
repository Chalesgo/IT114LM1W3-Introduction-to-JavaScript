/*
    Resources:
    - MDN on Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
    - JavaScript Tutorial on Functions: https://javascript.info/function-basics
    - freeCodeCamp on Functions: https://www.freecodecamp.org/news/what-is-a-function-javascript-function-examples/
*/

// Todo 4.1 Declare a function named 'greet' that takes one parameter 'name' and displays a greeting
// Then, Call the 'greet' function with your name as the argument
function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet("Charles");

// Checkpoint 4.1 What is the difference between a function declaration and a function expression?
// Answer: A function declaration is hoisted and can be called before its declaration, while a function expression must be declared before it is called

// Todo 4.2 Declare a function expression named 'calculateArea' that takes the length and width of a rectangle and returns its area
// Then, Call the 'calculateArea' function with any length and width as arguments
const calculateArea = function(length, width) {
    return length * width;
};

const rectangleLength = 5;
const rectangleWidth = 8;
const area = calculateArea(rectangleLength, rectangleWidth);

console.log("The area of the rectangle is:", area);

// Checkpoint 4.2 What is a callback function? Provide an example.
// Answer: A callback function is a function passed as an argument to another function and is executed after the completion of a particular task
// Example:
function greet(name, callback) {
    console.log("Hello, " + name + "!");
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Alice", sayGoodbye);

// Todo 4.3 Declare a higher-order function named 'modifyArray' that takes an array and a function as parameters. The function should modify each element in the array using the provided function and return the modified array.
// Then, Call the 'modifyArray' function with the 'numbers' array and a function that increments each number by 1
// Useful Tutorial: https://youtu.be/H4awPsyugS0?si=7wC1B7whXVkG8X5l
function modifyArray(arr, modifyFunction) {
    return arr.map(modifyFunction);
}

const numbers = [1, 2, 3, 4, 5];
const modifiedNumbers = modifyArray(numbers, function (number) {
    return number + 1;
});

console.log("Original Numbers:", numbers);
console.log("Modified Numbers:", modifiedNumbers);


// Todo 4.4 See mathUtils.js for the instructions to create the add method and PI constant.
// Then, import and call the add method here and display the value of the PI constant
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
import { add, PI } from './mathUtils';

//const result = add(5, 7);
console.log("Result of adding 5 and 7:", add);

console.log("Value of PI:", PI);

// Todo 4.5 See isPalindrome.js for the instructions to create the isPalindrome method.
// Then, import and call the isPalindrome method here
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
import isPalindrome from './isPalindrome';

const word1 = "A man, a plan, a canal: Panama";
const word2 = "hello";

console.log(`${word1} is a palindrome: ${isPalindrome(word1)}`);
console.log(`${word2} is a palindrome: ${isPalindrome(word2)}`);

// Checkpoint 4.3 What does the require function and module.exports variable do?
// Should we use it over the import and export keywords? Why? Research your answer.
// Answer: Require and module.exports are used in CommonJS to import modules and export values, no we shouldn't since all data researched indicates import and export are better
