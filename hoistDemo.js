console.log(j);

hoistDemo();
function hoistDemo(){
    console.log(i);
    var i=2;
    
}
var j=8;
// 2.
x=5;
console.log(x);
var x;

// 3rd

hoisted();
function hoisted(){
console.log("hoisted")
}
// 4th
function demo(){
    console.log(y)
    var y=2;
}
demo();