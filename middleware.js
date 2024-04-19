const {productSchema,reviewSchema}=require('./schema');

const productValidate=(req,res,next)=>{
    const{name,imgae,price,description}=req.body;
    const {error}=productSchema.validate({name,image,price,description});
    if(error){
        return res.render('error');
    }
    next();
}

const reviewValidate=(req,res,next)=>{
    const{rating,comment}=req.body;
    const {error}=reviewSchema.validate({rating,comment});
    if(error){
        return res.render('error');
    }
    next();
}

module.exports={productValidate,reviewValidate};