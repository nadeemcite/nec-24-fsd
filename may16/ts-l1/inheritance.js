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
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.getAge = function () {
        console.log(this.age);
    };
    Animal.prototype.speak = function () {
        console.log("Animal speaks");
    };
    return Animal;
}());
var Mammal = /** @class */ (function (_super) {
    __extends(Mammal, _super);
    function Mammal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mammal.prototype.getNoofLegs = function () {
        console.log(this.nooflegs);
    };
    Mammal.prototype.speak = function () {
        console.log("Mammal speaks");
    };
    return Mammal;
}(Animal));
var cow = new Mammal();
cow.age = 12;
cow.nooflegs = 30;
cow.getNoofLegs();
// What is something that can be accessed from child class even if you have reference of parent class?
cow.speak();
