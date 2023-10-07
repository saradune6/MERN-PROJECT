const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();


dotenv.config({path:'./config.env'});
require('./db/conn');
// const User = require('./model/userSchema');

app.use(express.json());

app.use(require('./router/auth'));
//we link router file to make our route easy

const PORT = process.env.PORT;


// app.get('/about',  (req,res) => {
//     console.log(`hello about`)
//     res.send(`About Page`);
// });

app.get('/contact',(req,res) => {
    // res.cookie("TEST", "sara");
    res.send(`contact Page`);
});

app.get('/signin',(req,res) => {
    res.send(`login Page`);
});

app.get('/signup',(req,res) => {
    res.send(`log out Page`);
});

app.listen(PORT , ()=>{
    console.log(`server is running at port ${PORT}`);
})