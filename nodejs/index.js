//importing express package from the nodemodules.
const express = require('express')
//importing body parser from nodemodules to perform some api operations through body
const bodyparser = require('body-parser');

//creating a function of express.
const app = express()
//using middle ware bodypaser into our app.
app.use(bodyparser.urlencoded({extended:true}));
//parsing our body elements/vales through json content-type.
app.use(bodyparser.json());
//creating an array which will store details user
var userdetails = [];
//get method
app.get("/",(req,res)=>{
    res.json(userdetails); 
})
//post method
app.post("/signup",(req,res)=>{
    var userobj ={};
    userobj.name = req.body.name;
    userobj.phone = req.body.phone;
    userobj.email = req.body.email;
    userdetails.push(userobj);
    res.json(userdetails);
})

//put method
app.put("/update/:name",(req,res)=>{
    userdetails.forEach((item)=>{
        if(item.name === req.params.name)
        {
            item.name = req.body.name;
            item.email = req.body.email; 
        }
    })
    res.json(userdetails);
})

//delete method.
app.delete("/delete/:phone",(req,res) => {
    userdetails.forEach((item,index)=>{
        if(item.phone === req.params.phone)
        {
            userdetails.splice(index,1);
        }
    })
    res.json(userdetails);
})

app.listen(8080)  //port number.