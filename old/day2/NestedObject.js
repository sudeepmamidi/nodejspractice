let details = {
    FirstName : "Sudeep",
    LastName : "mamidi",
    age : 22,
    address:{
        city: "Hyderabad",
        state:"Telangana",
        PermenentAddress : {
            area : "something",
            Pin : 503224
        }
    }
};
console.log(Object.details.PermenentAddress.area);
console.log(Object.keys(details.address.PermenentAddress)[1]);