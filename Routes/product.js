const express = require('express');
const router = express.Router();
const Product = require('../Models/Product');

router.get('/products', async (req, res) => {
        let products = await Product.find({});
        res.render('product/index', { products }); 
});

module.exports = router;
