//Object.assign()
let object1 = {
    a:1,
    b:2,
};
let object2 = {
    b:4,
    d:3,
};
let StringObj = {
    firtsname : "sudeep",
    lastname : "mamidi"
};
let resultArray = Object.assign(object1,object2);
console.log(resultArray);
console.log(Object.assign(object2,StringObj));
//{ b: 4, d: 3, firtsname: 'sudeep', lastname: 'mamidi' }
//output { a: 1, b: 4, d: 3 }