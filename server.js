const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
 const rootroute =require("./routes/rootroute")
 const userroute =require("./routes/userroute")
 const productroute =require("./routes/productroute")
const connectDB = require("./config/db");
const PORT = process.env.PORT ;
const app = express();
connectDB();

// monopolistic architecture
// get request
// app.get("/",(req,res)=>{
//     res.send("hello world");
// });
// app.get("/dev",(req,res)=>{
//     res.send("Dev bsdk ");
// });

//  app.get("/users",(req,res)=>{
//    res.send(userdata);
// });

// distributive architecture


 app.use("/",rootroute);
app.use("/users",userroute);
app.use("/products",productroute);

// server create
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`.red);
});
