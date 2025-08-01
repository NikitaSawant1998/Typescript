//Type Annotations: Parameters and return values can be explicitly typed,
//ensuring type safety and aiding in early error detection.
function add(a, b) {
    return a + b;
}
console.log(add(5, 6));
//Named Functions: Defined using the function keyword with a specific name.
function greet(name) {
    return "Hello, ".concat(name, "!");
}
console.log(greet("Nikita"));
//Anonymous Functions: Functions without a name, 
// often assigned to variables or used as arguments for other functions.
var multiply = function (x, y) {
    return x * y;
};
console.log(multiply(5, 6));
//Arrow Functions: A concise syntax for writing anonymous functions,
//particularly useful for callbacks and maintaining this context.
var subtract = function (a, b) { return a - b; };
console.log(subtract(8, 2));
//Optional Parameters: Indicated by a ? after the parameter name,
//allowing the parameter to be omitted when calling the function.
function logMessage(message, prefix) {
    console.log(prefix ? "".concat(prefix, ": ").concat(message) : message);
}
console.log("msg", "prfx");
console.log("msg"); //prefix is optional which is denoted ?
//Default Parameters: Assign a default value to a parameter, 
// which is used if no value is provided during the function call.
function sayHello(name) {
    if (name === void 0) { name = "its me default"; }
    return "Hello, ".concat(name, "!");
}
console.log(sayHello("Anushree"));
console.log(sayHello());
//Rest Parameters: Allows a function to accept an indefinite number of arguments as an array.
function sumAll() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, num) { return total + num; }, 0);
}
console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15));
