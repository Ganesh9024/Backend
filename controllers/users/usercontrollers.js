// const userdata=require("../../utility/users.json");

// const usercontrollers=(req,res)=>{
//     res.send(userdata);
// };
// module.exports = usercontrollers;



const userCollection =require("../../model/userSchema");
const mongoose = require ("mongoose");

const usercontrollers= async(req,res)=>{
    const users = await userCollection.find();
    res.send(users);
};
module.exports =usercontrollers;