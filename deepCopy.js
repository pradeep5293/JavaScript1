var obj1 = {
    name: "pk",
    pass: 25487,
    address:{
        city: "vrns",
        state: "UP"
    },
    getData:function(){
        return "address"
    }
};
var obj2=JSON.parse(JSON.stringify(obj1));
obj2.address.city=" Delhi"

console.log("obj1 :", obj1)
console.log("obj2 :", obj2)

