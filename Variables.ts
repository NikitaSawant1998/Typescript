//Declaring Variables with Type Annotations
let m: string = "Nikita";
let age: number = 25;
let isActive: boolean = true;
console.log(m,age,isActive);
//If you don’t specify the type, TypeScript uses type inference:
let country = "India";  // inferred as string
/*
| Keyword | Scope           | Reassignment | Hoisting           |
| ------- | --------------- | ------------ | ------------------ |
| `let`   | Block-scoped    | ✅ Yes        | ❌ No               |
| `const` | Block-scoped    | ❌ No         | ❌ No               |
| `var`   | Function-scoped | ✅ Yes        | ✅ Yes (but unsafe) |
*/
const pi: number = 3.14;
let count: number = 10;
var greeting: string = "Hello";
// Type Annotations for Arrays, Tuples, and Objects
let numbers: number[] = [1, 2, 3];
let person: [string, number] = ["Nikita", 25];

let user: { name: string; isAdmin: boolean } = {
  name: "Nikita",
  isAdmin: false
};
//--------------------------------------------------------------
let nme: string = "Nikita";
const isLoggedIn: boolean = true;
let num: number[] = [1, 2, 3];
let info: [string, number] = ["Score", 99];
let anything: any = "Hello";
let result: number | string = 90;
console.log(anything)

