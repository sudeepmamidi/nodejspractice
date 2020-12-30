const { Router } = require('express');
const express = require('express')
const router = express.Router();
const {getUsers,postUser} = require("../controller/user.controller");
//getting data
router.get("/mall/:name",getUsers)
//posting data
router.get("/add/:name/:city/:pin",postUser)




module.exports = router;

