var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        return "Hello my name is ".concat(this.name, " and i am ").concat(this.age, " years old");
    };
    return Person;
}());
var p1 = new Person("Daya", 22);
console.log(p1.greet());
//p1.age=22; cannot change the value, b'coz age is declared as readonly
console.log(p1.age);
