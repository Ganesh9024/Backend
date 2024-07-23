const userdata=require("../utility/users.json");

const usercontrollers=(req,res)=>{
    res.send(userdata);
};
module.exports = usercontrollers;