const productCollection =require("../models/productSchema");
const mongoose = require ("mongoose");

const productcontrollers= async(req,res)=>{
    const products = await productCollection.find();
    res.send(products);
};
module.exports = productcontrollers;