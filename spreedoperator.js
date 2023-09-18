var d={
    h:2,
    j:3
};
var e=d; //assign to reference of d to e
var f={...d}  //shallow copy so defferent memory location
console.log(e===d)
console.log(f===d)


// 2.
var k={
    p:2,
    q:3
}
var s=k
var f={...k,q:4}
console.log(f.p);
console.log(f.q);

