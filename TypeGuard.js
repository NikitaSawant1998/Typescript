//a key feature for working safely with union types and narrowing down variable types at runtime.
/*
✅ What is a Type Guard in TypeScript?
A type guard is a way to narrow down the type of a variable within a block so TypeScript can infer the correct type and avoid errors.

Type guards are usually used with:
=>typeof
=>instanceof
=>in
=>Custom guard functions
*/
function printId(id) {
    if (typeof id === "string") {
        console.log(id.toUpperCase()); // TypeScript knows `id` is a string here
    }
    else {
        console.log("Its number sorry cant change case");
    }
}
printId(5);
printId("nikita");
/*
🧩 Why Use Type Guards?
Because with union types, you may not know the exact type at runtime:
function print(value: string | number) {
  // Can't do value.toUpperCase() directly
}
We need a type guard to narrow it.
| Type Guard      | Used For              | Example                           |
| --------------- | --------------------- | --------------------------------- |
| `typeof`        | Primitives            | `typeof value === "string"`       |
| `instanceof`    | Classes               | `value instanceof ClassName`      |
| `in`            | Property existence    | `"bark" in animal`                |
| Custom Function | Complex/nested checks | `function isAdmin(x): x is Admin` |
🔐 Type Guards = Type Safety + Cleaner Code
They help prevent:
Runtime errors
Unnecessary as type assertions
Code duplication
*/
