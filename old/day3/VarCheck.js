//var functionality
//  Scoped variable that uses within the function.
// if globally declared we use variable in local fucntion also.

var number = 20;
function Check (){
    var name = "Sudeep";
    name = "Mahesh";
    number = 5
    //console.log(name);
    console.log(number);
}
function check2() {
    console.log(`check 2 :${number}`)
}
Check();
check2();