const productCollection =require("../../models/productSchema");
const mongoose = require ("mongoose");

const productcontrollers= async(req,res)=>{
    try{
        const {id ,category,subcategory,name,keyword}=req.params;
    let  products ;
    if(id){
    
     products = await productCollection.findById(id);
    }
    // else if(category){
    //     const searchcategory = category.toLowerCase();
    //    products= await productCollection.find({
    //       category:{$regex: new RegExp(searchcategory,"i")},
    // });
    // }
    // else if(subcategory){
    //     const searchsubcategory = subcategory.toLowerCase();
    //   products=  await productCollection.find({
    //      sub_category:{$regex: new RegExp(searchsubcategory,"i")},
    // });
    // }
    else if(name){
        const searchname = name.toLowerCase();
       products= await productCollection.find({
         name:{$regex: new RegExp(searchname,"i")},
    });
    }
    else if (req.path.includes("/random")){
      products=await productCollection.aggregate([{
        $sample:{size : 5}}]);
    }
    else if(req.path.includes("/top-rated")){
        products= await productCollection.find().sort({rating: -1}).limit(5);
 }
 else if(req.path.includes("/cost-lowest-to-highest")){
        products= await productCollection.find().sort({new_price: 1}); //ascending order
 }
 else if(req.path.includes("/cost-highest-to-lowest")){
        products= await productCollection.find().sort({new_price: -1}); //descending order
    }
else if (category)
    {
        const searchcategory = category.toLowerCase();
        if (req.path.includes("/lowtohigh")) 
        {
            products = await productCollection.find({category:{$regex:new RegExp(searchcategory, "i")}}).sort({new_price: +1});
        }
        else if (req.path.includes("/hightolow"))
        {
            products = await productCollection.find({category:{$regex:new RegExp(searchcategory, "i")}}).sort({new_price: -1});
        }
        else {
            products = await productCollection.find({category:{$regex:new RegExp(searchcategory, "i")}});
        }
    }
    else if (subcategory) {
        const searchsubcategory = subcategory.toLowerCase();
 if(req.path.includes("/lowtohigh")){
       products = await productCollection.find({sub_category:{$regex:new RegExp(searchsubcategory,"i")} }).sort({new_price:1});
        } 
else if(req.path.includes("/hightolow")){
            products =await productCollection.find({sub_category:{$regex:new RegExp(searchsubcategory,"i")}, }).sort({new_price:-1});
        } else {
            products = await productCollection.find({ sub_category: { $regex: new RegExp(searchsubcategory, "i") } });
        }
    }
    else if (name) {
        // const searchname = name.toLowerCase();
        
        if(req.path.includes("/asc")){
        products =  await productCollection.find().sort({name:1})
    }
    else if((req.path.includes("/desc"))) {
        products =  await productCollection.find({name:/^A/}).sort({name:-1})
    }}

    else if (keyword) {
        // const searchkeyword = keyword.toLowerCase();
        products =  await productCollection.find({
            $or:[
                {name:{$regex:new RegExp(searchname,"i")}},
                {sub_category: { $regex: new RegExp(searchsubcategory, "i") } },
                {category:{$regex:new RegExp(searchcategory,"i")}}
            ],
        });
    }


    else{
     products= await productCollection.find();}
   if(!products || products.length ==0)
    res.status(404).json({message:"products not found"});
    res.status(200).send(products);
}catch(error){
    console.log(error);
    res.status(500).json({message:"internal server error"});
}};
module.exports = productcontrollers;