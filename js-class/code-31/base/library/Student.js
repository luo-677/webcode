// let a = 10;
// let b = 5;


// module.exports = { a, b };

// --------------------------

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayName() {
        console.log(this.name);
    }
}

module.exports = Student;