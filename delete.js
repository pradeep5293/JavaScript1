var student={
    Name:"Yash",
    RollNo:125436,
    Marks:485,
    "4":"four",
}
var prop=delete student.Marks;
console.log(student);

// OR
var prop2=delete student["4"];
console.log(student);
