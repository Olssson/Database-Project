//npm start
//npm i nodemon mysql hbs express dotenv cookie-parser jsonwebtoken ejs stripe --save dot dotenv --save-dev
const express = require("express");
const mysql = require("mysql")
const dotenv = require("dotenv");
const path = require('path');
const exp = require("constants");
const session = require('express-session');
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
const stripeSecretKey = process.env.STRIPE_SECRET_KEY
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY

console.log(stripeSecretKey,stripePublicKey)

dotenv.config({ path: './.env'});

const app = express("express");
const fs = require('fs')

const db = mysql.createConnection({
    //w nazwie hosta jak chcem wstawić stronę na server należy zmienić nazwę z localhost na np ip
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password:process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});
//console.log(__dirname)
const publicDirectory = path.join(__dirname, './public')
app.use(express.static(publicDirectory));

app.set('view engine', 'hbs');

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(session({
    secret: 'iLoveSql',
    resave: false,
    saveUninitialized: false
  }));

db.connect( (error) =>{
    if(error) {
        console.log(error)
    }
    else {
        console.log("Dzieńki działa")
    }    
})
app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));
app.get('/index', function(req,res) {
    fs.readFileSync('items.json', function(error, data){
        if(error){
            res.status(500).end()
        }else {
            res.render("index.ejs",{
                items: JSON.parse(data)
            })
        }
    })
})
app.listen(5000, () =>{
    console.log("Server Start on port 5000");
})