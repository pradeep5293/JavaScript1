var name="global";
function outer(){
    // var name="outer";
    function inner(){
        // var name="inner";
        console.log(name);
    }
    inner();
    console.log(name);

}
outer();
console.log(name);
