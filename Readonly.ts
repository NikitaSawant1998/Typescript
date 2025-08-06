 //which helps make your objects immutable
 // (partially or fully) — meaning once a value is set, it cannot be changed.
//The readonly keyword prevents reassignment of a property after it’s been initialized.
/* syntax-----
type User = {
  readonly id: number;
  name: string;
};
Use readonly for:
=>IDs
=>Immutable configurations
=>Constant lists
=>API response data you don't want to modify

*/

 type U1 = { readonly id: number; name: string };  
let us: U1 = { id: 1, name: "Alice" };
user.id = 2; // ❌ Error: Cannot modify readonly property
const numbers: readonly number[] = [1, 2, 3];

// numbers.push(4);   ❌ Error
// numbers[0] = 10;   ❌ Error

console.log(numbers); // ✅ [1, 2, 3]