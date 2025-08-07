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
function identity<T>(value: T): T {
  return value;
}

const result1 = identity<number>(5);      // T = number
const result2 = identity<string>("Nikita"); // T = string
//Here, T is a type parameter (can be anything — T, U, K, etc.)
//--------------Generics with array------------------------
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}
const firstNum = getFirstElement([1, 2, 3]);          // number
const firstStr = getFirstElement(["a", "b", "c"]);    // string
/*

📌 When to Use Generics?
When working with reusable code (arrays, API data, services)
When type safety matters
When writing libraries or components
*/

