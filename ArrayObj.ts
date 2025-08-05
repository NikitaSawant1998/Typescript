//basic syntax
let num2: number[] = [1, 2, 3];
let names: string[] = ["Nikita", "Ravi"];
//Generic syntax
let bools: Array<boolean> = [true, false, true];
//Mixed Types (Union):
let mixed: (string | number)[] = [1, "two", 3];
//Array of object
type a1 = {
  name: string;
  age: number;
};

let users: a1[] = [
  { name: "Nikita", age: 25 },
  { name: "Ravi", age: 30 }
];

console.log(users)
//------------------Onject in ts-----------------
type Car = {
  brand: string;
  model: string;
  year: number;
};

let myCar: Car = {
  brand: "Honda",
  model: "City",
  year: 2021
};
console.log(myCar)
