var arr = [1, 2, 3];
var sum = 0;
arr.forEach(getSum);
console.log(sum);

function getSum(ele) {
    sum += ele;
}

var week = ["Monday", "Teusday", "Wednesday", "Thursday", "Friday", "Sturday", "Sunday"];

function returnDay(x){
    return(x<1||x>7)? null:week[x];
}
console.log(returnDay(1))
    
