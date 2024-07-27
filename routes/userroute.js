const express = require("express");
const usercontrollers=require("../controllers/users/usercontrollers");
const router = express.Router();
router.get("/getusers",usercontrollers);
module.exports = router;