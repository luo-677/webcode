"use strict";
var People = /** @class */ (function () {
    function People() {
        this.a = 1;
        this.c = 3;
    }
    People.prototype.fn = function () { };
    People.handler = function () { };
    People.prototype.func = function () { };
    People.b = 2;
    return People;
}());
var people = new People();
people.a;
people.fn();
People.b;
People.handler();
