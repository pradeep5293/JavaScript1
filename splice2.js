var fruits=['Apple', 'Orange', 'Kiwi', 'Strawberry',5,8,9];
fruits.splice(2,4,"banana");
console.log((fruits));


var num=[1,4,7,8,5];
function rotateLeft(arr){
    var shiftedEle=arr.shift();
    arr.push(shiftedEle);
    return arr;
}

console.log(rotateLeft(num));