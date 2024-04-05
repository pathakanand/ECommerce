const express = require('express');
const router = express.Router();
const Product = require('../Models/Product');

router.get('/products', async (req, res) => {
        let products = await Product.find({});
        res.render('product/index', { products }); 
});

router.get('/product/new',(req,res)=>{
        res.render('product/new');
})

router.post('/products',async (req,res)=>{
        let {name,image,price,description}=req.body;
        await Product.create({name,image,price,description});
        res.redirect('/products');
})

router.get('/products/:id',async (req,res)=>{
        let {id}= req.params;
        let foundProduct = await Product.findById(id);
        res.render('product/show',{foundProduct});
})

router.get('/products/:id/edit', async(req,res)=>{
        let {id}= req.params;
        let foundProduct = await Product.findById(id);
        res.render('product/edit',{foundProduct});
})

router.patch('/products/:id',async(req,res)=>{
        let {id}=req.params;
        let {name,image,price,description}=req.body;
        await Product.findByIdAndUpdate(id,{name,image,price,description})
        res.redirect(`/products/${id}`);
})

router.delete('/products/:id',async (req,res)=>{
        let {id}=req.params;
        await Product.findByIdAndDelete(id);
        res.redirect('/products');
})

module.exports = router;
