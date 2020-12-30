const express = require('express')
const app = express();

app.use("/",require("./routes/user.route"));
app.use("/",require("./routes/product.route"));




//this is get as post method


app.listen(4000,()=>console.log("server is running"))