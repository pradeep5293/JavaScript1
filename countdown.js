var count = 15;
function timer() {
    console.log("countdown", count)
    count--;
    if (count == 0) {
        clearInterval(id);
        console.log("timeOut!")
        return;
    }
}

var id = setInterval(timer, 100);