/*
✅ What are Generics?
Generics allow you to write flexible and reusable components, functions, or classes that work with any data type,
while still maintaining type safety.
Instead of writing a function for every type (string, number, boolean, etc.), you write one generic function.
🧠 Why Use Generics?
Without Generics:
function identity(arg: any): any {
  return arg; // no type safety
}
  With Generics:
function identity<T>(arg: T): T {
  return arg; // type safe!
}
*/
function identity(value) {
    return value;
}
var result1 = identity(5); // T = number
var result2 = identity("Nikita"); // T = string
//Here, T is a type parameter (can be anything — T, U, K, etc.)
//--------------Generics with array------------------------
function getFirstElement(arr) {
    return arr[0];
}
var firstNum = getFirstElement([1, 2, 3]); // number
var firstStr = getFirstElement(["a", "b", "c"]); // string
/*

📌 When to Use Generics?
When working with reusable code (arrays, API data, services)
When type safety matters
When writing libraries or components
*/
