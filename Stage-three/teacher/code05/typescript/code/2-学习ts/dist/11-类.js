"use strict";
var People = /** @class */ (function () {
    function People() {
        this.a = 1;
        this.c = 3;
    }
    People.prototype.fn = function (a, b) {
        return a + b;
    };
    People.prototype.add = function (a, b) {
        console.log(a, b);
    };
    People.handler = function (n, m) {
        return n + m;
    };
    People.prototype.func = function (a, b) {
        return a + b;
    };
    People.b = 2;
    return People;
}());
var people = new People();
people.a;
people.fn(10, 20);
People.b;
People.handler('a', 100);
