const express = require('express');
const router = express.Router();
const {getProducts,postProduct} = require('../controller/product.controller');
//getting data
router.get("/product/:category",getProducts)
//posting data
router.get("/string",postProduct)

module.exports = router;