/*
Abstract classes in TypeScript are classes that cannot be instantiated on their own and must be subclassed by other classes. Abstract classes provide a blueprint for other classes and can have abstract methods, which are methods without a body and must be overridden by the subclass. These classes are useful for defining a common interface or basic functionality that other classes can inherit and build upon.
*/

// abstract keyword defines that you can`t ever instanciate RdrChar directly
abstract class RdrChar {
  constructor() {}

  move() {}
  speak() {
    console.log(`${this.name}: ${this.phraseSpeak()}`);
  }

  abstract phraseSpeak(): string {}

  abstract get name(): string;
}

class Dutch extends RdrChar {
  phraseSpeak(): string {
    return "I got a plan John";
  }

  get name(): string {
    return "Dutch";
  }
}

class John extends RdrChar {
  phraseSpeak(): string {
    return "You always got a plan Dutch.";
  }

  get name(): string {
    return "John";
  }
}

const dutchVanDerLinde = new Dutch();
const johnMarston = new John();

dutchVanDerLinde.speak();

setTimeout(() => {
    johnMarston.speak()
}, [1300]);
