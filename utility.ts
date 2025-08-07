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


//Built-in types to modify existing types:
type Pe = { name: string; age: number };	
type PartialPerson = Partial<Pe>; // Makes all properties optional
//Readonly<T> – Makes properties readonly
//Pick<T, K> – Selects certain keys from a type
//Omit<T, K> – Excludes certain keys
//-----------Partial<Type>-------------------------------
type User1 = {
  name: string;
  age: number;
};

const updateUser = (user1: Partial<User1>) => {
  console.log(user1);
};

updateUser({ name: "Nikita" }); // ✅ OK (age is optional)
//-----------Required <Type>-------------------------------------------------------
type Myt = {
  name?: string;
  age?: number;
};

const u: Required<Myt> = {
  name: "Nikita",
  age: 25,   // ❗ Now both are required
};
console.log(u.name)
console.log(u.age)
//---------------Another example-------------------------
function greet(u: Required<Myt>) {
  console.log(`Hello, ${u.name}. You are ${u.age} years old.`);
}

greet(u);
/*
🔁 In Summary
Required<User> converts optional fields to required
You call/use u like any normal object
You can pass u to any function expecting a Required<User>
*/
//-----------------Pick type------------------------------------
/*
syntax:-
Pick<Type, Keys>
Creates a new type by picking selected keys from a type.
*/
type Mypick = {
  id: number;
  name: string;
  age: number;
};

type newMypick = Pick<Mypick, "name">;
const pickvariable: newMypick = { name: "Nikita" };
console.log(pickvariable)
//-----------------Omit type------------------------------------
//Creates a new type by removing selected keys.
type OmitPick = {
  id: number;
  name: string;
  age: number;
};

type WithoutAge = Omit<OmitPick, "age">;

const omitvariable: WithoutAge = { id: 1, name: "Nikita" };
console.log(omitvariable,"age omitted")
