var round=1;
function rotate(){
    console.log("rotate",round);
    round++;
    if(round==8){
        clearInterval(id1);
    }
}
// var id1=setTimeout(rotate)
// var id=setInterval(rotate);
var id=setInterval(rotate,1000);
