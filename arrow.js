// function greet(){
//     console.log("Good Morning")
// }
// greet();

// by using arrow func

greet =() =>{
    console.log("Good Morning")
}
greet();

setTimeout(() =>{
    console.log("Good Morning after 4 sec")

},4000)

// 3.

// let sum=(a,b)=>{
// return (a+b)
// };

// or
let sum=(a,b)=>(a+b);