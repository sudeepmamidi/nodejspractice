var groccery = [];

let getProducts = (req,res)=>{
    
var arr = groccery.filter((item)=>{

        return item.category === req.params.category;
    })
    res.json(arr);
}

let postProduct = (req,res)=>{
    groccery.push(req.query);
    res.json(groccery);
}

module.exports = {getProducts,postProduct}
