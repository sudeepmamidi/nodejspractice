let StudentDetails = {
    Name : "Sudeep",
    age : 22,
    CurrentCity : "Hyderabad",
    isCurrentCity_Same_As_HomeTown : false
};
StudentDetails.fatherName = "Bhumesh";
let result = StudentDetails.hasOwnProperty("Name");
console.log(result); //true
console.log(StudentDetails.hasOwnProperty("age")); //true
console.log(StudentDetails.hasOwnProperty("fathername")); //false 
console.log(StudentDetails.hasOwnProperty("isCurrentCity_Same_As_HomeTown")); 