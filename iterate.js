var student={
    Name:"Yash",
    RollNo:125436,
    Marks:485,
}
for(var prop in student){
    console.log(prop,student[prop]);
}
// method2.

// var keys=student.getOwnPropertyNames(student);
// console.log(keys);