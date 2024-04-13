const express = require('express');
const router = express.Router();
const Product = require('../Models/Product');
const Review= require('../Models/Review')
const {productValidate}=require('../middleware');

router.get('/products', async (req, res) => {
        try{
                let products = await Product.find({});
        res.render('product/index', { products }); 
        }
        catch(e){
                res.status(500).render('error',{err:e.message});
        }
});

router.get('/product/new',(req,res)=>{
        try{
                res.render('product/new');
        }
        catch(e){
                res.status(500).render('error',{err:e.message});
        }
})

router.post('/products',productValidate,async (req,res)=>{
        try{
                let {name,image,price,description}=req.body;
        await Product.create({name,image,price,description});
        res.redirect('/products');
        }
        catch(e){
                res.status(500).render('error',{err:e.message});
        }
})

router.get('/products/:id',async (req,res)=>{
        try{
                let {id}= req.params;
        let foundProduct = await Product.findById(id).populate('review');
        res.render('product/show',{foundProduct});
        }
        catch(e){
                res.status(500).render('error',{err:e.message});
        }
})

router.get('/products/:id/edit', async(req,res)=>{
        try{
                let {id}= req.params;
        let foundProduct = await Product.findById(id);
        res.render('product/edit',{foundProduct});
        }
        catch(e){
                res.status(500).render('error',{err:e.message});
        }
})

router.patch('/products/:id',productValidate,async(req,res)=>{
        try{
                let {id}=req.params;
        let {name,image,price,description}=req.body;
        await Product.findByIdAndUpdate(id,{name,image,price,description})
        res.redirect(`/products/${id}`);
        }
        catch(e){
                res.status(500).render('error',{err:e.message});
        }
})

router.delete('/products/:id',async (req,res)=>{
        try{
                let {id}=req.params;
        await Product.findByIdAndDelete(id);
        res.redirect('/products');
        }
        catch(e){
                res.status(500).render('error',{err:e.message});
        }
})

module.exports = router;
