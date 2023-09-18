// pass by reference

// var obj1={
//     name:"pk",
//     pass:25487,
// }
// var obj2=obj1;
// obj2.name="sk"
// console.log(obj1);
// console.log(obj2);

// shallow copy

// var obj1 = {
//     name: "pk",
//     pass: 25487,
// }
// var obj2 = Object.assign({}, obj1);

// obj2.name = "nk";
// console.log("obj1 :", obj1)
// console.log("obj2 :", obj2)

// method2 object destructuring

// var obj1 = {
//     name: "pk",
//     pass: 25487,
// }
// var obj2={...obj1}
// obj2.name = "nk";
// console.log("obj1 :", obj1)
// console.log("obj2 :", obj2)

// deep copy

var obj1 = {
    name: "pk",
    pass: 25487,
    address:{
        city: "vrns",
        state: "UP"
    }
};
var obj2=JSON.parse(JSON.stringify(obj1));
obj2.address.city=" Delhi"

console.log("obj1 :", obj1)
console.log("obj2 :", obj2)

