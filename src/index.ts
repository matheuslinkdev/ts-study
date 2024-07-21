//Basic types
let age: number = 18;
const myName: string = "Matheus";
const tenhoEmprego: boolean = false;

//Avoid
let idk: any = 5;
idk = "Hello";

//Assign a string list
const languagesList: string[] = ["JavaScript", "Python", "Java", "Assembly"];
const ratingsList: number[] = [1, 2, 3, 4];

//Tupla//
const person: [number, string] = [1, "Mario"];

//Tupla list
const people: [number, string][] = [
  [1, "Mario"],
  [2, "Luigi"],
  [3, "Caramelo"],
];

//Intersections//

//the variable can be of each type that has been specified in the declaration
const productId: string | number = "Hello";

//Enum//
// Usable where the value should be one or other, we can assign one value in other value
enum Direction {
  Up = 1,
  Down = 2,
  Left = "Left",
}
const direction = Direction.Up;

//Type Assertions//
// Type Assertion is a technique that allows manually specifying the type of a variable in TypeScript, useful when the compiler cannot infer the type correctly.
const productName: any = "Hat";

// let itemId = productName as string;
let itemId = <string>productName
