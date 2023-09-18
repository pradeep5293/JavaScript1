var student={
    Name:"Yash",
    RollNo:125436,
    Marks:485,
    "4":"four",
}
// for access to value
// console.log(student);
console.log([student]);
// console.log(student["Marks"])
// console.log(student["4"])
function printProperty(obj,prop){
    console.log(obj[prop]);
}
var prop="Marks";
printProperty(student,prop);
