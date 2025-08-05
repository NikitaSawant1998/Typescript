/*🔹 What is a Union Type?
A union type lets a variable hold values of more than one type.

✅ Syntax:
let variableName: type1 | type2;
The | (pipe) symbol is used to combine multiple types.
*/
let value: string | number;

value = "Hello";   // ✅ OK
value = 42;        // ✅ OK
value = true;      // ❌ Error: boolean not allowed
//Function with Union Type Parameter
function printId(id: number | string) {
    console.log("Your ID is: " + id);
}

printId(101);        // ✅
printId("A123");     // ✅
printId(true);       // ❌
//Union Type in Arrays:Each element in the array can be either number or string.
let data: (number | string)[] = [1, "two", 3, "four"];
