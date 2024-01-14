/*
    Resources:
    - JavaScript Tutorial on Objects: https://javascript.info/object
    - freeCodeCamp on Objects: https://www.freecodecamp.org/news/objects-in-javascript-for-beginners/
    - JavaScript Tutorial on Arrays: https://javascript.info/array
    - freeCodeCamp on Arrays: https://www.freecodecamp.org/news/javascript-array-tutorial-array-methods-in-js/
*/

let numbers = [
    1, 89, 55, 63, 29, 19,
    15, 77, 62, 68, 29, 84,
    21, 26, 49
];

// Todo 3.1 Get the first, 5th, and last items in the numbers array.
const firstItem = numbers[0];
const fifthItem = numbers[4];
const lastItem = numbers[numbers.length - 1];

console.log("First Item:", firstItem);
console.log("Fifth Item:", fifthItem);
console.log("Last Item:", lastItem);

// Todo 3.2 calculate the min, max, and the average of the numbers array
const min = Math.min(...numbers);
const max = Math.max(...numbers);

let sum = 0;
for (const number of numbers) {
    sum += number;
}
const average = sum / numbers.length;

console.log("Min:", min);
console.log("Max:", max);
console.log("Average:", average);

// Checkpoint 3.1 How would you compare lists in python vs arrays in JavaScript
// Answer: They differ in different features in their syntax, type flexibility, built-in methods and language specific features

// Todo 3.3 Declare an object with information about IT114L (course code, name, units, number of students)
// Todo 3.4 Add professor name as one of the fields of the object. Display the value of professor name.
const it114lCourse = {
    courseCode: "IT114L",
    courseName: "WEB SYSTEMS AND TECHNOLOGIES (LABORATORY)",
    units: 1,
    numberOfStudents: 40,
    professorName: "Job Lipat",
};

console.log("Course Code:", it114lCourse.courseCode);
console.log("Course Name:", it114lCourse.courseName);
console.log("Units:", it114lCourse.units);
console.log("Number of Students:", it114lCourse.numberOfStudents);
console.log("Professor Name:", it114lCourse.professorName);



// Todo 3.5 Declare and array of objects with information about the courses you are taking this term
const coursesThisTerm = [
    {
        courseCode: "IT114L",
        courseName: "WEB SYSTEMS AND TECHNOLOGIES (LABORATORY)",
        units: 1,
        professorName: "Job Lipat",
    },
    {
        courseCode: "CS102-1",
        courseName: "DATA STRUCTURES AND ALGORITHMS ANALYSIS",
        units: 2,
        professorName: "Terrence Lim",
    },
    {
        courseCode: "HUM039",
        courseName: "ETHICS",
        units: 3,
        professorName: "Rogelio Valenzuela",
    },
    {
        courseCode: "IT132L",
        courseName: "LOGIC DESIGN AND SWITCHING (LABORATORY)",
        units: 1,
        professorName: "Leonnel De Mesa",
    },
    {
        courseCode: "IT132",
        courseName: "LOGIC DESIGN AND SWITCHING THEORY",
        units: 2,
        professorName: "Leonnel De Mesa",
    },
    {
        courseCode: "PE044",
        courseName: "PHYSICAL ACTIVITIES TOWARDS HEALTH AND FITNESS ",
        units: 2,
        professorName: "Arnel Reyes",
    },
    {
        courseCode: "IT33",
        courseName: "TECHOPRENEURSHIP",
        units: 3,
        professorName: "Khristian Kikuchi",
    },
    {
        courseCode: "VE022",
        courseName: "VALUES EDUCATION 2",
        units: 1,
        professorName: "Rogelio Valenzuela",
    },
    {
        courseCode: "IT114",
        courseName: "WEB SYSTEMS AND TECHNOLOGIES",
        units: 2,
        professorName: "Adomar Ilao",
    },
];

coursesThisTerm.forEach(course => {
    console.log("Course Code:", course.courseCode);
    console.log("Course Name:", course.courseName);
    console.log("Units:", course.units);
    console.log("Professor Name:", course.professorName);
    console.log("-----"); 
});

// Todo 3.5 Calculate the total number of units you are taking this term using the array of objects.
let totalUnits = 0;
coursesThisTerm.forEach(course => {
    totalUnits += course.units;
});

console.log("Total Units This Term:", totalUnits);

// Checkpoint 3.2 What would be the equivalent of objects in python? How would you compare them?
// Answer: Both are the same with only a slight syntax and method differences between the two

// Todo 3.6 Going back to the array of numbers, use the spread syntax to create a copy of the array with an additional number
const newArray = [...numbers, 99];

console.log("Original Array:", numbers);
console.log("New Array with Additional Number:", newArray);

// Todo 3.7 Going back to your IT114L object, extract the course code and units using the spread operator
const { courseCode, units } = { ...it114lCourse };

console.log("Course Code:", courseCode);
console.log("Units:", units);
