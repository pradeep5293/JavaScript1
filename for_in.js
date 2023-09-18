var arr=[20,40,50,70,80,90];
arr[8]="pqr";
arr.prop1="next"
console.log(arr);
console.log(arr.length);

// array in object like this
var obj={
    "0":20,
    "1":40,
    "2":50,
    "3":70,
    "4":80,
    "5":90
}
obj.prop1="next";
for(var i in arr){
console.log(i);

}