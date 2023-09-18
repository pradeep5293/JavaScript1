function a(){
    function b(){
        return 3;
    }
    return b();
    function b(){
        return 8;
    }
}
console.log(a());