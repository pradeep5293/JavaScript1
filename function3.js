function outer(){
    var outer=4;
    function inner(){
        var inner=5;
        console.log(outer);
    }
    inner();
    console.log(inner);

}
outer();


function a() {
    console.log("Inside a");

    function b() {
        console.log("Inside b");
    }
}

b();
