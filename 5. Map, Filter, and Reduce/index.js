/*
    Resources:
    - freeCodeCamp on Map, Reduce and Filter: https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/
*/
// TODO 5.1 Use the map method to create a new array that contains the squares of all numbers in the array
const numbers = [1, 2, 4, 4, 5];
const squares = numbers.map(number => number * number);
console.log("Numbers:", numbers);
console.log("Squares:", squares);

// TODO 5.2 Use the filter method to create a new array that contains only the even numbers in the array
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log("Even:", evenNumbers);

// TODO 5.3 Use the reduce method to find the sum of all numbers in the array
const sum = numbers.reduce((accumulator, currentNumber) => accumulator + currentNumber, 0);
console.log("Sum:", sum);

// TODO 5.4 Use the map method to convert all elements in the array to uppercase
const words = ['hello', 'world'];
const uppercasedWords = words.map(word => word.toUpperCase());

console.log("Original Words:", words);
console.log("Uppercased Words:", uppercasedWords);

// TODO 5.5 Use the filter method to create a new array that contains only the words with more than four letters in the array
const longWords = uppercasedWords.filter(word => word.length > 4);

console.log("Original Words:", uppercasedWords);
console.log("Uppercased Words with More than Four Letters:", longWords);

// TODO 5.6 Use the reduce method to concatenate all words in the array into a single string
const concatenatedString = words.reduce((accumulator, currentWord) => accumulator + currentWord, '');

console.log("Concatenated String:", concatenatedString);

// Checkpoint 5.1 Summarize what map, filter, and reduce do
// Answer: Map transforms each element of an array, filter selects elements based on a condition, and reduce aggregates array elements into a single value, collectively providing versatile means for array manipulation in JavaScript