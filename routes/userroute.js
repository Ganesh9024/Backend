const express = require("express");
const usercontrollers=require("../controllers/usercontrollers");
const router = express.Router();
router.get("/",usercontrollers);
module.exports = router;