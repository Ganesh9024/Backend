const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    product_id:{
        type:Number,
        unique:true,
        required:[true,"product id is required"]
    },
    name:{
        type:String,
        required:[true,"product name is required"]
    },
    // productImg:{
    //     type:String,
    //     required:[true,"productImg is required"]
    // },
    description:{
        type:String,
        required:[true,"description is required"]
    },
    new_price:{
        type:Number,
        required:[true,"new_price is required"]
    },
    old_price:{
        type:Number,
        required:[true,"old_price is required"]
    },
    product_qty:{
        type:Number,
        required:[true,"product_qty is required"]
    },
    category:{
        type:String,
        required:[true,"category is required"]
    },
    sub_category:{
        type:String,
        required:[true,"sub_category is required"]
    },
    rating:{
        type:Number,
        requizred:[true,"rating is required"]
    },
    colors:{
        type:[String],
        required:[true,"colors is required"],
    },
});
const userCollection = mongoose.model("users",userSchema);
module.exports =userCollection;