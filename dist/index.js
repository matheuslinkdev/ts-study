"use strict";
//Basic types
let age = 18;
const myName = "Matheus";
const tenhoEmprego = false;
//Avoid
let idk = 5;
idk = "Hello";
//Assign a string list
const languagesList = ["JavaScript", "Python", "Java", "Assembly"];
const ratingsList = [1, 2, 3, 4];
//Tupla//
const person = [1, "Mario"];
//Tupla list
const people = [
    [1, "Mario"],
    [2, "Luigi"],
    [3, "Caramelo"],
];
//Intersections//
//the variable can be of each type that has been specified in the declaration
const productId = "Hello";
//Enum//
// Usable where the value should be one or other, we can assign one value in other value
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction["Left"] = "Left";
})(Direction || (Direction = {}));
const direction = Direction.Up;
//Type Assertions//
// Type Assertion is a technique that allows manually specifying the type of a variable in TypeScript, useful when the compiler cannot infer the type correctly.
const productName = "Hat";
// let itemId = productName as string;
let itemId = productName;
