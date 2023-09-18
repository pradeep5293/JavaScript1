var sec=1;
function sayHello(){
    console.log("after",sec)
    sec++;
    if(sec==8){
        // for stop
        clearInterval(id)
    }
}
// setTimeout(sayHello,2000);
var id=setInterval(sayHello,100);