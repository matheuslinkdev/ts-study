var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.greet = function () {
        console.log("Hey there");
    };
    return Person;
}());
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Programmer.prototype.greet = function () {
        console.log("Hello world");
    };
    // If you call the greet with "this", it will call the greet from the subclass, that is Programmer
    // greetLikeNormalPeople(){
    //     this.greet()
    // }
    //This will log ("Hey there"), coz the "super" keyword refers to the PARENT class
    Programmer.prototype.greetLikeNormalPeople = function () {
        _super.prototype.greet.call(this);
    };
    return Programmer;
}(Person));
var aProgrammer = new Programmer();
//If this method doesn't exist on class Programmer will be inherit from class Person, so will log ("Hey there")
// Otherwise, if exists inside the Programmer class, will be logged what is passed to him there, in this case ("Hello world")
aProgrammer.greetLikeNormalPeople();
//POLYMORPHISM
//You can only use methods of the type that it belongs, in this case its Person
var bProgrammer = new Programmer();
bProgrammer.greet();
