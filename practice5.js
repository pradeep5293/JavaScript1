function test(a,b){
console.log(a+b);
}
test(2);

// 2.

var a=1;
function b(){
    a=10;
    return;
    function a(){}
}
b();
console.log(a);

// 3.

array = [ 60, 70, 20, 10, 40, 90 ];

const test1 = function(x) {
    return x > 5;
}

if(!array.every(test1)) {
    console.log("statement 1"); 
}

else {
    console.log("statement 2"); 
}

// 4.
// hoisted();
// var hoisted=function(){
//     console.log('bar');
// };
var words=['one','two','three','four'];
words.forEach(function(word){
    console.log(word);
    if(word==='two'){
        words.shift();
    }
})