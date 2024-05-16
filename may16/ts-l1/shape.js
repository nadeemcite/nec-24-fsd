"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
var Shape = /** @class */ (function () {
    function Shape(properties) {
        this.properties = properties;
    }
    return Shape;
}());
exports.Shape = Shape;
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Square.prototype.calculatArea = function () {
        return Math.pow(this.properties.side, 2);
    };
    return Square;
}(Shape));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rectangle.prototype.calculatArea = function () {
        return this.properties.l * this.properties.b;
    };
    return Rectangle;
}(Shape));
var square = new Square({ side: 10 });
var rect = new Rectangle({ l: 5, b: 9 });
console.log(square.calculatArea());
console.log(rect.calculatArea());
/*

abstract class Shape<T>{
    protected properties:T
    constructor(properties:T){
        this.properties = properties
    }
    abstract calculatArea(): number
}

abstract class Shape<T>{
    constructor(protected properties:T){
    }
    abstract calculatArea(): number
}
*/ 
