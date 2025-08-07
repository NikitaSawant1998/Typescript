/*Interfaces vs. Type Aliases
Interfaces: Used for objects and can be extended
Type Aliases: Can be used for any type (union, tuple, etc.)
✅ 1. What is an Interface?
Used to define the structure of an object
Can be extended (inheritance)
Best suited for object types
interface Person {
  name: string;
  age: number;
}
✅ 2. What is a Type Alias?
Can define any type, not just objects.
Can represent unions, tuples, primitives, etc.
Cannot be reopened/extended like interfaces (but can use intersections).
type Person = {
  name: string;
  age: number;
};
type ID = string | number;
type RGB = [number, number, number];
*/
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}
type Status = "success" | "error" | "pending";  // ✅ union

type RGB = [number, number, number];           // ✅ tuple

interface UserIn {
  id: number;
  name: string;
}

type Admin = UserIn & { accessLevel: number };   // ✅ intersection

