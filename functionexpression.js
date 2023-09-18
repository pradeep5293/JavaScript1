// function expression
var st=function show(){
    console.log("yash");
}
st();

// vs function declaration
disp();
function disp(){
    console.log("yash");
}

console.log(fact(4));
function fact(n){
    var ans=1;
    for(let i=1;i<=n;i++){
        ans=ans*i;
    }
    return ans;

}

