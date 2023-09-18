function abc(arr){
var arr2=[]
for(i in arr){
    arr2[i]=i;
}
return arr2;
}
var arr=[12,56,48,"hello"];
console.log(abc(arr)[1]);

// 2.
var obj1={}
var obj2=new Object()
var obj3={}
console.log(obj1==obj2,obj1==obj3)

// 3.

let list=[4,5,6];
for(let i in list){
    console.log(i);
}
for(let i of list){
    console.log(i);

}