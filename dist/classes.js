"use strict";
class Person {
    constructor(id, name, age) {
        this.name = name;
        this.id = id;
        this.age = age;
    }
    sayMyName() {
        return this.name;
    }
}
class Employee extends Person {
    constructor(id, name, age) {
        super(id, name, age);
    }
}
const firstPerson = new Person(1, "Matheus", 18);
