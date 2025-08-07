/*
Utility types in TypeScript are built-in helpers that make it easier to
transform or work with types — saving time and making your code more flexible and readable.

✅ What are Utility Types?
These are predefined generic types provided by TypeScript to help you:
Make properties optional
Read-only
Pick or exclude properties
Manipulate types
*/
var updateUser = function (user1) {
    console.log(user1);
};
updateUser({ name: "Nikita" }); // ✅ OK (age is optional)
var u = {
    name: "Nikita",
    age: 25, // ❗ Now both are required
};
console.log(u.name);
console.log(u.age);
//---------------Another example-------------------------
function greet(u) {
    console.log("Hello, ".concat(u.name, ". You are ").concat(u.age, " years old."));
}
greet(u);
var pickvariable = { name: "Nikita" };
console.log(pickvariable);
var omitvariable = { id: 1, name: "Nikita" };
console.log(omitvariable, "age omitted");
