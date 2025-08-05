/*
What is an enum in TypeScript?
An enum (short for enumeration) is a special type that defines a set of named constants. 
It makes your code more readable and easier to manage, especially when working with fixed sets of values 
like days, roles, statuses, etc.
Syntax:=>

enum EnumName {
  VALUE1,
  VALUE2,
  ...
}
By default, the values are numeric starting from 0, but you can assign custom values too.

*/
//------------Numeric enum:----------------------
enum Direction {
  North,
  South,
  East,
  West
}

let dir: Direction = Direction.North;
console.log(dir); // Output: 0
console.log(Direction[0]); // Output: "North"-reverse mapping
//--------------String Enum----------------------------
enum Stat {
  Success = "SUCCESS",
  Failure = "FAILURE",
  Loading = "LOADING"
}

let stat: Stat = Stat.Success;
console.log(stat); // Output: "SUCCESS"=>No reverse mapping for string enums like numeric enum

//------------------custom enum--------------------------------------
enum Weekday {
  Mon = 1,
  Tue = 2,
  Wed = 3,
  Thu = 4,
  Fri = 5
}

console.log(Weekday.Tue); // Output: 2



//---------------------enum with functions----------------------
enum UserRole {
  Admin,
  Editor,
  Viewer
}

function checkAccess(role: UserRole) {
  if (role === UserRole.Admin) {
    console.log("Full access granted.");
  } else {
    console.log("Limited access.");
  }
}

checkAccess(UserRole.Admin);   // Full access
checkAccess(UserRole.Viewer);  // Limited access


