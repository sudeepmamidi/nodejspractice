
var mall = [];

let getUsers = (req,res)=>{
    res.json(mall.find((item)=>item.name === req.params.name));
}

let postUser = (req,res)=>{
    mall.push(req.params);
    res.json(mall);
}

module.exports = {getUsers,postUser}