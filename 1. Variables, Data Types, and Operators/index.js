/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/

// TODO 1.1 Use the var keyword to define a variable. Log the variable to the console. Now try moving the variable declaration after you log the variable.
// TODO 1.2 Use the let keyword to define a variable.
// TODO 1.3 Use the const keyword to define a variable. Try reassigning the value of the variable. What happens?
var x = 10;
let y = 69;
const z = 24;
console.log(z)

// Checkpoint 1.1 What is the difference between var, let, and const?
// Answer: const cannot be changed be it value or type and var is for old windows

// TODO 1.4 Try out the different arithmetic operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators
var a = 5
const b = 10/2;
let c = a + b;
console.log(c)

// Checkpoint 1.2 What operators did you use?
// Answer: addition and multiplication

// TODO 1.5 Try out the different string operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators
let mystring = "Hello";
mystring += "there";
console.log(mystring)

// Checkpoint 1.3 What operators did you use?
// Answer: a concatinated addition of strings 

// TODO 1.6 Try out the different logical operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
const x1 = 5
const y1 = 10
const n = x1 && y1;
console.log(n)

// Checkpoint 1.4 What operators did you use?
// Answer: logical and


// TODO 1.7 Try out the different relational operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators
const jedi = ["luke","obi-wan","anakin"];
2 in jedi;
console.log(jedi)

// Checkpoint 1.5 What does [] == false evaluate to? Why does that happen? Research why
// Answer: 
// Your code here