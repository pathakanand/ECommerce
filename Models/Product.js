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

let Product=mongoose.model('Product',productSchema);
module.exports=Product;