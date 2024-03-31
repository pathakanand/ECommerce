const express =require('express');
const app=express();
const mongoose = require('mongoose');
const path=require('path');
const seedDB=require('./seed');
const productroutes=require('./Routes/product')



mongoose.connect('mongodb://127.0.0.1:27017/shopping-app')
.then(()=>{
    console.log("Database connected successfully");
})
.catch(()=>{
    console.log("db not connected");
})

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));
app.use(express.static(path.join(__dirname,'/Public')));


// seedDB();

app.use(productroutes);











app.listen(8080,()=>{
    console.log('server connected')
})