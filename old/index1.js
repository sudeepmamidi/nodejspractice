let details = [
    {id:1,Name:"sudeep",age:20},
    {id:2,Name:"mamidi",age:22},
    {id:3,Name:"mamidi",age:24},
    {id:4,Name:"mamidi",age:25}
]
console.log(details[0].age);
let objtest = details.filter(function(detail){
    return detail.age >=21;
});
console.log(objtest);

let numbers = [2,3,4,1,3,5,45,543,3232];

let res = numbers.splice(2,0,"s1,s2");

let result = details.every(function(value){
    return value.id>=2;
});

console.log(result);