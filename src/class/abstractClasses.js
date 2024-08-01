/*
Abstract classes in TypeScript are classes that cannot be instantiated on their own and must be subclassed by other classes. Abstract classes provide a blueprint for other classes and can have abstract methods, which are methods without a body and must be overridden by the subclass. These classes are useful for defining a common interface or basic functionality that other classes can inherit and build upon.
*/
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
// abstract keyword defines that you can`t ever instanciate RdrChar directly
var RdrChar = /** @class */ (function () {
    function RdrChar() {
    }
    RdrChar.prototype.move = function () { };
    RdrChar.prototype.speak = function () {
        console.log("".concat(this.name, ": ").concat(this.phraseSpeak()));
    };
    RdrChar.prototype.phraseSpeak = function () { };
    return RdrChar;
}());
var Dutch = /** @class */ (function (_super) {
    __extends(Dutch, _super);
    function Dutch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dutch.prototype.phraseSpeak = function () {
        return "I got a plan John";
    };
    Object.defineProperty(Dutch.prototype, "name", {
        get: function () {
            return "Dutch";
        },
        enumerable: false,
        configurable: true
    });
    return Dutch;
}(RdrChar));
var John = /** @class */ (function (_super) {
    __extends(John, _super);
    function John() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    John.prototype.phraseSpeak = function () {
        return "You always got a plan Dutch.";
    };
    Object.defineProperty(John.prototype, "name", {
        get: function () {
            return "John";
        },
        enumerable: false,
        configurable: true
    });
    return John;
}(RdrChar));
var dutchVanDerLinde = new Dutch();
var johnMarston = new John();
dutchVanDerLinde.speak();
setTimeout(function () {
    johnMarston.speak();
}, [1300]);
