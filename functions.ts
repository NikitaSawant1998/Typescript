//Type Annotations: Parameters and return values can be explicitly typed,
//ensuring type safety and aiding in early error detection.
    function add(a: number, b: number): number 
    {
        return a + b;
    }
    console.log(add(5,6))
//Named Functions: Defined using the function keyword with a specific name.
        function greet(name: string): string 
        {
        return `Hello, ${name}!`;
        }
    console.log(greet("Nikita"))
//Anonymous Functions: Functions without a name, 
// often assigned to variables or used as arguments for other functions.
        const multiply = function(x: number, y: number): number 
        {
        return x * y;
        };
        console.log(multiply(5,6))
//Arrow Functions: A concise syntax for writing anonymous functions,
//particularly useful for callbacks and maintaining this context.
            const subtract = (a: number, b: number): number => a - b;
            console.log(subtract(8,2))
//Optional Parameters: Indicated by a ? after the parameter name,
//allowing the parameter to be omitted when calling the function.
    function logMessage(message: string, prefix?: string): void
     {
        console.log(prefix ? `${prefix}: ${message}` : message);
    }
console.log("msg","prfx")
console.log("msg")//prefix is optional which is denoted ?
//Default Parameters: Assign a default value to a parameter, 
// which is used if no value is provided during the function call.
    function sayHello(name: string = "its me default"): string {
        return `Hello, ${name}!`;
    }
console.log(sayHello("Anushree"))
console.log(sayHello())
//Rest Parameters: Allows a function to accept an indefinite number of arguments as an array.
    function sumAll(...numbers: number[]): number {
        return numbers.reduce((total, num) => total + num, 0);
    }
console.log(sumAll(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15))
