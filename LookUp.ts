/*
Keyof & Lookup Types:
Access object keys dynamically:
type User = { name: string; age: number };
type UserKeys = key of User; // "name" | "age"
*/
/*
 keyof Operator
The keyof operator returns a union of property names (keys) of a given type.
*/
type MykeyOf = {
  name: string;
  age: number;
};

type UserKeys = keyof MykeyOf;
// type UserKeys = "name" | "age"
//Now UserKeys can only be "name" or "age".
/*
Lookup Type
A lookup type allows you to access the type of a specific property by key.
TypeName["key"]

*/
type MyLookup = {
  name: string;
  age: number;
};
type NameType = MyLookup["name"]; // string
type AgeType = MyLookup["age"];   // number
/*
| Feature     | Purpose                            | Example                   |         |
| ----------- | ---------------------------------- | ------------------------- | ------- |
| `keyof`     | Get keys of an object as a union   | `keyof User` → \`"name"   | "age"\` |
| Lookup Type | Access type of a specific property | `User["name"]` → `string` |         |
| Combo Usage | Type-safe functions, utilities     | `T[K]`                    |         |

*/