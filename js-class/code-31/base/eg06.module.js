// const { a, b } = require('./library/Student');

// console.log(a + b);

const Student = require('./library/Student');

let s = new Student('zhangsan', 20);

console.log(s);

s.sayName();