// Type compatibility in TypeScript ensures that types are compatible based on their structure, not just their explicit type names. This allows for flexible and intuitive type checking, making it easier to work with different types of objects and functions. By understanding and leveraging type compatibility, you can write more robust and flexible TypeScript code.

// Interface Compatibility
interface Person {
  name: string;
  age: number;
}

let person: Person;
let anotherPerson = { name: "Matheus", age: 19 };

person = anotherPerson; // Compatible because the structure matches

// Extra Properties
interface Car {
  make: string;
  model: string;
}

let car: Car;
let myCar = { make: "Toyota", model: "Corolla", year: 2020 };

car = myCar; // Compatible because it matches the structure required by Car

// Function Compatibility
let add: (a: number, b: number) => number;
function sum(x: number, y: number): number {
  return x + y;
}

add = sum; // Compatible because the parameter list and return type match

// Function Parameter Bivariance
type Log = (message: string) => void;

let logError: Log;
let logAny: (msg: any) => void = (msg) => console.log(msg);

logError = logAny; // Compatible: 'logAny' is less specific in its parameter type

// Type Incompatibility
interface Point2D {
  x: number;
  y: number;
}

interface Point3D {
  x: number;
  y: number;
  z: number;
}

let point2D: Point2D;
let point3D: Point3D = { x: 1, y: 2, z: 3 };

// point2D = point3D; // Error: Type 'Point3D' is not assignable to type 'Point2D'.

// Class Compatibility
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Dog {
  name: string;
  breed: string;
  constructor(name: string, breed: string) {
    this.name = name;
    this.breed = breed;
  }
}

let animal: Animal;
let dog = new Dog("Buddy", "Golden Retriever");

animal = dog; // Compatible because Dog has at least the same structure as Animal

// Structural Typing with Interfaces
interface Employee {
  id: number;
  name: string;
}

interface Developer {
  id: number;
  name: string;
  skills: string[];
}

let employee: Employee;
let developer: Developer = {
  id: 1,
  name: "John",
  skills: ["TypeScript", "React"],
};

employee = developer; // Compatible because Developer has all properties of Employee

// Assigning Functions with Different Parameter Counts
let multiply: (a: number, b: number) => number;
let double: (a: number) => number = (a) => a * 2;

multiply = double; // Compatible because double has fewer parameters

// Assigning Functions with Optional Parameters
type Print = (message: string, timestamp?: Date) => void;

let printMessage: Print = (msg) => console.log(msg);
let detailedPrint: Print = (msg, time) =>
  console.log(`${time?.toISOString()}: ${msg}`);

printMessage = detailedPrint; // Compatible because timestamp is optional

// Type Assertion for Compatibility
interface Square {
  size: number;
}

interface Rectangle {
  width: number;
  height: number;
}

let square: Square = { size: 10 };
let rectangle: Rectangle = { width: 10, height: 20 };

square = rectangle as any; // Using type assertion for compatibility (not recommended without caution)
