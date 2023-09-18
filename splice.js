var arr=[2,4,5,7,8];
// fo delete
arr.splice(4);
console.log(arr);
// for delete and countdelete
arr.splice(4,1,100);
console.log(arr);

// for delete, to existing element and addition to new element
arr.splice(2,3,1,10,"yash");
console.log(arr);
console.log(arr.copyWithin(arr));

