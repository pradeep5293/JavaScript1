var obj={
    "p":10
};
var obj2=obj;

console.log(obj);
console.log(obj2);
console.log(obj==obj2);

obj2.p=100;
console.log(obj);
console.log(obj2);
console.log(obj==obj2);
