let jsonobject = {
    "name" : "sudeep",
    "age" : 21,
    "cars" : {
        "Car1" : "Bmw",
        "car2" : "fait"
    }
}
console.log(jsonobject);

jsonobject.gender = "Male"; // Adding an property into object
console.log(jsonobject.gender);
jsonobject.cars.car3 = "mercedes"; //Adding nested object properties
console.log(jsonobject.cars.car3);
//Update a property in the Object
jsonobject.cars.car2 = "mercedes"
console.log(jsonobject.cars);

//deleting object properties.

delete jsonobject.cars.car2;
console.log(jsonobject.cars);
