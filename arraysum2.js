// var input=[2,1,4,3,5];
// var sum=0;
// function func(...input){
// var sum=0;
    
//     for(let i=0;i<input.length;i++){
//         sum+=input[i];
//     }
//     return sum;
// }
// console.log(func(1,2,4,5));

// 2.
var input=[2,1,4,3,5];
var sum=0;
input.forEach(getSum);
    console.log(sum);
     
       function getSum(ele){
        sum+=ele;
       }