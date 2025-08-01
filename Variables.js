//Declaring Variables with Type Annotations
var m = "Nikita";
var age = 25;
var isActive = true;
console.log(m, age, isActive);
//If you don’t specify the type, TypeScript uses type inference:
var country = "India"; // inferred as string
/*
| Keyword | Scope           | Reassignment | Hoisting           |
| ------- | --------------- | ------------ | ------------------ |
| `let`   | Block-scoped    | ✅ Yes        | ❌ No               |
| `const` | Block-scoped    | ❌ No         | ❌ No               |
| `var`   | Function-scoped | ✅ Yes        | ✅ Yes (but unsafe) |
*/
var pi = 3.14;
var count = 10;
var greeting = "Hello";
// Type Annotations for Arrays, Tuples, and Objects
var numbers = [1, 2, 3];
var person = ["Nikita", 25];
var user = {
    name: "Nikita",
    isAdmin: false
};
//--------------------------------------------------------------
var nme = "Nikita";
var isLoggedIn = true;
var num = [1, 2, 3];
var info = ["Score", 99];
var anything = "Hello";
var result = 90;
console.log(anything);
