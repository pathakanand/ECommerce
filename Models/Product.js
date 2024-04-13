const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    image:{
        type:String,
        trim:true
    },
    price:{
        type:Number,
        min:0,
        required:true
    },
    description:{
        type:String,
        trim:true
    },
    review:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Review'
    }]
})

productSchema.post('findOneAndDelete',async function(){
    if(productSchema.review.length>0){
        await Review.deleteMany({_id:{$in:productSchema.review}})
    }
})

let Product=mongoose.model('Product',productSchema);
module.exports=Product;