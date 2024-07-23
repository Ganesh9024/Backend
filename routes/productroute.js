const express = require("express");
const productControllers=require("../controllers/productcontrollers");
const router = express.Router();
router.get("/",productControllers);
module.exports = router;