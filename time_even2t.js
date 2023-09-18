var count=0;
function counting(){
    console.log(count++);
    if(count==5){
        clearInterval(abc);
    }
}


var abc= setInterval(counting,300);