var student={
    Name:"Yash",
    RollNo:125436,
    Marks:485,
    address:{
        city:"New Delhi",
        pinCode:110032,
    }
};
console.log(student.address);
console.log(student.address["city"]);
console.log(student.address.city);
console.log(student["address"]["pinCode"]);

var obj=[1,2,4,8,7];
var n=obj.length;
// for(let i=0;i<n;++i){
//     console.log(i);
// }
for(var i in obj){
   console.log(obj[i]);

}


