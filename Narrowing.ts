/*
Why Type Narrowing?
When a variable has a union type like string | number, TypeScript doesn’t know what specific type-
it is until you perform a check. 
Narrowing helps ensure type safety in such situations.
*/
//Use control flow to ensure type safety:
function process(value: string | number) {
    if (typeof value === "string") {
        console.log(value.toUpperCase()); // TypeScript knows it's a string
    }
    else{
        console.log("It is not string")
    }
}
process(5)
process("nikita")