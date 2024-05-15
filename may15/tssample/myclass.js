var MyPerson = /** @class */ (function () {
    function MyPerson(n) {
        this.name = n;
    }
    MyPerson.prototype.sayHello = function () {
        console.log(this.name);
    };
    return MyPerson;
}());
var myPerson = new MyPerson("my name");
myPerson.sayHello();
