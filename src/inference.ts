//TypeScript type inference is a feature that allows the TypeScript compiler to automatically deduce the type of a variable or expression. This means that you do not have to explicitly specify the type of every variable and expression in your code.

// Type Inference in Variables
let name = "Matheus"; // Type inferred as string
let age = 19; // Type inferred as number
let isActive = true; // Type inferred as boolean

// Type Inference in Arrays
let people = ["Matheus", "Jose", "Miguel"]; // Type inferred as string[]
let numbers = [1, 2, 3, 4, 5]; // Type inferred as number[]

// Type Inference in Functions
function add(a: number, b: number) {
    return a + b; // Type inferred as number
}

const result = add(5, 4); // Type inferred as number

// Type Inference in Complex Structures (Objects)
let user = {
    name: "Matheus",
    age: 19
}; // Type inferred as { name: string; age: number }

// Type Inference in Contexts
people.forEach(person => {
    console.log(person); // Type inferred as string
});

// Function with Inferred Parameter and Return Type
function multiply(a: number, b: number) {
    return a * b; // Type inferred as number
}

const product = multiply(3, 7); // Type inferred as number

// Inference in Uninitialized Variables (explicit annotation needed)
let address: string;
address = "Main Street, 123"; // Type explicitly defined as string

// Function with Contextual Type Inference
function greeting(name: string) {
    return "Hello, " + name; // Type inferred as string
}

let greetingMessage = greeting("Matheus"); // Type inferred as string
