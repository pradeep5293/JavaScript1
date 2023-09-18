// global scope
var name="scope";
console.log(name);

// function scope,within curly bracket

function scopeDemo(){
    var i=2;
    console.log(i);
}
scopeDemo();
// global scope

var name1="global";
function scopeDemo(){
    // var name1="function";
    console.log(name1);
}
scopeDemo();
console.log(name1);

// example4 of global context
function c(){
    
    console.log("inside c");
}
function b(){
    c();
    console.log("inside b");
}
function a(){
    b();
    console.log("inside a");
}
a();
console.log("global context");
