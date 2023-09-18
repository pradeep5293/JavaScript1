// pass value Vs pass by reference
var a=4;
var b=a+6;
console.log(a);
console.log(b);

// by by refernce only for non-primitive data type
var obj1={
    name:"yash",
pass:12544
}
var obj2=obj1;
obj2.pass=57896;
console.log(obj1);
console.log(obj2);

// for array

var arr1=[7,8,9,4,5];
var arr2=arr1;
arr2.push("cvjd");
console.log(arr1);
console.log(arr2);


