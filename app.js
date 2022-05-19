//npm start
//npm i nodemon mysql hbs express dotenv cookie-parser jsonwebtoken
const express = require("express");
const mysql = require("mysql")
const dotenv = require("dotenv");
const path = require('path');
const exp = require("constants");
const session = require('express-session');

dotenv.config({ path: './.env'});

const app = express("express");

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

app.listen(5000, () =>{
    console.log("Server Start on port 5000");
})