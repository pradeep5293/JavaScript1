var area=function(w,h){
return(w*h);
}
console.log(area(5,4));


function a(){
    console.log("inside a");
    function b(){
    console.log("inside b");

    }
}
// a()b();

var fact=function fact(n){
    var ans=1;
    for(let i=1;i<=n;i++){
        ans=ans*i;
    }
    return ans;
}

function ncr(n,r,fact){
    return fact(n)/(fact(r)*fact(n-r));
}
console.log(ncr(5,2,fact));