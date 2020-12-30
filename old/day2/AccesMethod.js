// Accssing methods
const obj1 = {
    FirstName : "sudeep",
    LastName : "Mamidi",
    age : 22,
};
obj1.printage = function(){
    return obj1.age;
}
obj1.printFullName = () =>{
    console.log(`FullName:${obj1.FirstName}${obj1.LastName}`)
}
console.log(obj1.printage());
obj1.printFullName();
