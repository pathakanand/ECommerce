let express=require('express');
let router=express.Router();
let Product=require('../Models/Product');
let Review=require('../Models/Review');

router.post('/products/:id/review',async (req,res)=>{
    let {id}=req.params;
    let {rating,comment}=req.body;
    const product= await Product.findById(id);
    let review=new Review({rating,comment});

    product.review.push(review);
    await review.save();
    await product.save();
    res.redirect(`/products/${id}`);
})

module.exports=router;