var nums1=[8,4,2,7,5,1];
let res1=nums1.reduce((a,b)=>a+b);
console.log(res1);

// 2.use filter ,map and reduce function

var nums=[8,4,2,7,5,6];
 let res=nums.filter(n=>n%2!=0).map(n=>n*2).reduce((a,b)=>a+b)
 console.log(res);

//  3.
var nums3=[1,2,3,4,5,8];
nums3.reduce((p,q)=>{
    console.log(p,q)
    return(p+q);
})