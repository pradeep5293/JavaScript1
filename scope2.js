var name="";
function a(){
     name="inside a";
    function b(){
         name=name+" inside b";
        // console.log(name);
    }
    b();
    // console.log(name);

}
a();
console.log(name);

