/*
Mapped types in TypeScript allow you to create new types by transforming properties of 
an existing type using the keyof keyword and type mapping syntax.

✅ What is a Mapped Type?
A mapped type takes a union of property keys (like keyof T) and maps each key to a new type or transformation.
@@Syntax:-
type MappedType<T> = {
  [P in keyof T]: T[P];
};
//This copies all properties from type T into a new type.
*/
//🔹 Example 1: Make all properties string----------------------------
type Map1 = {
  name: string;
  age: number;
};

type AllString<T> = {
  [P in keyof T]: string;
};
type StringUser = AllString<Map1>;
// Result: { name: string; age: string }
