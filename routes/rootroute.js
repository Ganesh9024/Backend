const express = require("express");
const rootcontrollers=require("../controllers/roots/rootcontrollers");
const router = express.Router();
router.get("/",rootcontrollers);
module.exports = router;