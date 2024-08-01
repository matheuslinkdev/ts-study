/*
    In TypeScript, method overriding is a mechanism where a subclass provides a new implementation for a method that is already defined in its parent class. This allows the subclass to inherit the behavior of the parent class, but change its behavior to fit its own needs.

To override a method in TypeScript the signature of the method in the subclass must match exactly with the signature of the method in the parent class.
*/

class Animal {
  makeSound(): void {
    console.log("Making animal sound");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("The dog is barking now");
  }
}

let animal: Animal;

animal = new Dog();
animal.makeSound(); // Output: Bark
