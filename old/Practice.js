let details = {
    FirstName : "Sudeep",
    LastName : "mamidi",
    age : 22,
    address:{
        city: "Hyderabad",
        state:"Telangana",
        PermenentAddress : [
            ["something"],
            ["some"]
        ]
    }
};

console.log(details.address.PermenentAddress[0]);
