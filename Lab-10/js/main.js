console.log(a);
var a = 10;

// console.log(b);
let b = 20;

// console.log(c);
const c = 30;

function testScope() {
    if (true) {
        var x = 5;
        let y = 10;
        const z = 15;
    }
    console.log(x);
    // console.log(y);
    // console.log(z);
}
testScope();

console.log(5 + "5");
console.log("5" - 2);
console.log(true + false);
console.log(null + 1);
console.log(undefined + 1);
console.log(0 == false);
console.log(0 === false);

const person = {
    name: "John",
    age: 30
};
person.age = 31;
person.city = "New York";
console.log(person);

// person = { name: "Alice", age: 25 };

Object.freeze(person);
person.age = 40;
console.log(person);

function checkType(value) {
    return typeof value;
}
console.log(checkType(10));
console.log(checkType("Hello"));
console.log(checkType(null));