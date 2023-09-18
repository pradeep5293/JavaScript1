// var nums=[8,4,2,7,5,6];
// let res=nums.map(n => n*2)
// console.log(res);

// 2.

// var nums=[8,4,2,7,5,6];
// nums.map(n => n*2).forEach(n=>{
//     console.log(n);
// })

// 3.

var nums=[8,4,2,7,5,6];
nums.filter(n=>n%2==0).map(n => n*2).forEach(n=>{
    console.log(n);
})
