let express=require('express');
let router=express.Router();
let Product=require('../Models/Product');
let Review=require('../Models/Review');
const{reviewValidate}=require('../middleware')

router.post('/products/:id/review',reviewValidate,async (req,res)=>{
    try{
        let {id}=req.params;
    let {rating,comment}=req.body;
    const product= await Product.findById(id);
    let review=new Review({rating,comment});

    product.review.push(review);
    await review.save();
    await product.save();
    res.redirect(`/products/${id}`);
    }
    catch(e){
        res.status(500).render('error',{err:e.message})
}
})

module.exports=router;