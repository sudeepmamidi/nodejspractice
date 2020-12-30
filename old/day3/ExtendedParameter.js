//Extended Paramerters
function add(a,b,c) {
    if(b===undefined){
        b=4;
    }
    if(c===undefined){
        c=10;
    }
    return a+b+c;
}
console.log(add(1,2)); //13

//Es6

function add1(a1,b1=4,c1=10) {
    return a1+b1+c1;
}
console.log(add1(1));