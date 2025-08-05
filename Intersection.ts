/* What is an Intersection Type?
An intersection type allows you to combine multiple types into one.
 The resulting type must satisfy all the combined types.
 ✅ Syntax:
type Combined = Type1 & Type2;

Think of it as "AND" logic – the value must have everything from both types.
*/
type Person = {
    name: string;
};

type Employee = {
    employeeId: number;
};

type EmployeeDetails = Person & Employee;

const emp: EmployeeDetails = {
    name: "Nikita",
    employeeId: 101
};
type CanPrint = {
    print(): void;
};

type CanScan = {
    scan(): void;
};

type MultiFunctionDevice = CanPrint & CanScan;

const device: MultiFunctionDevice = {
    print() {
        console.log("Printing...");
    },
    scan() {
        console.log("Scanning...");
    }
};

device.print(); // ✅
device.scan();  // ✅
