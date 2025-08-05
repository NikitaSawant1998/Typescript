/*
Tuple: Fixed-length array with specific types
 let person: [string, number] = ["John", 25]; 
 A tuple is a typed array with a fixed number of elements, where each element has a specific type and position.

It’s like a combination of an array and a struct from other languages.

✅ Syntax:

let tupleName: [type1, type2, ...] = [value1, value2, ...];

*/
let u1: [string, number] = ["Nikita", 25];

console.log(u1[0]); // "Nikita"
console.log(u1[1]); // 25
//u1[0] must be a string u1[1] must be a number

//With Function Return
function getUser(): [string, number] {
    return ["Nikita", 101];
}

const [nam, id] = getUser();
console.log(nam); // "Nikita"
console.log(id);   // 101

/*
| Feature  | Tuple                           | Array                            |
| -------- | ------------------------------- | -------------------------------- |
| Length   | Fixed                           | Variable                         |
| Types    | Types are **position-specific** | Types are **uniform or generic** |
| Use Case | Return multiple values, pairs   | Collections of similar items     |

*/