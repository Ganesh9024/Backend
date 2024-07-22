const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const userdata =require("./utility/users.json")
 const rootroute =require("./routes/rootroute")

const PORT = process.env.PORT || 5000 || 6000;
const app = express();
// get request
// app.get("/",(req,res)=>{
//     res.send("hello world");
// });
// app.get("/dev",(req,res)=>{
//     res.send("Dev bsdk ");
// });
 app.use("/",rootroute);
 app.get("/users",(req,res)=>{
   res.send(userdata);
});

// server create
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`.red);
});
