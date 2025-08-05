var emp = {
    name: "Nikita",
    employeeId: 101
};
var device = {
    print: function () {
        console.log("Printing...");
    },
    scan: function () {
        console.log("Scanning...");
    }
};
device.print(); // ✅
device.scan(); // ✅
