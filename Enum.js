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
var Direction;
(function (Direction) {
    Direction[Direction["North"] = 0] = "North";
    Direction[Direction["South"] = 1] = "South";
    Direction[Direction["East"] = 2] = "East";
    Direction[Direction["West"] = 3] = "West";
})(Direction || (Direction = {}));
var dir = Direction.North;
console.log(dir); // Output: 0
console.log(Direction[0]); // Output: "North"-reverse mapping
//--------------String Enum----------------------------
var Stat;
(function (Stat) {
    Stat["Success"] = "SUCCESS";
    Stat["Failure"] = "FAILURE";
    Stat["Loading"] = "LOADING";
})(Stat || (Stat = {}));
var stat = Stat.Success;
console.log(stat); // Output: "SUCCESS"=>No reverse mapping for string enums like numeric enum
//------------------custom enum--------------------------------------
var Weekday;
(function (Weekday) {
    Weekday[Weekday["Mon"] = 1] = "Mon";
    Weekday[Weekday["Tue"] = 2] = "Tue";
    Weekday[Weekday["Wed"] = 3] = "Wed";
    Weekday[Weekday["Thu"] = 4] = "Thu";
    Weekday[Weekday["Fri"] = 5] = "Fri";
})(Weekday || (Weekday = {}));
console.log(Weekday.Tue); // Output: 2
//---------------------enum with functions----------------------
var UserRole;
(function (UserRole) {
    UserRole[UserRole["Admin"] = 0] = "Admin";
    UserRole[UserRole["Editor"] = 1] = "Editor";
    UserRole[UserRole["Viewer"] = 2] = "Viewer";
})(UserRole || (UserRole = {}));
function checkAccess(role) {
    if (role === UserRole.Admin) {
        console.log("Full access granted.");
    }
    else {
        console.log("Limited access.");
    }
}
checkAccess(UserRole.Admin); // Full access
checkAccess(UserRole.Viewer); // Limited access
