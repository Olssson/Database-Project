//npm start
const express = require("express");
const mysql = require("mysql")
const dotenv = require("dotenv");
const path = require('path');
const exp = require("constants");

dotenv.config({ path: './.env'});

const app = express("express");

const db = mysql.createConnection({
    //w nazwie hosta jak chcem wstawić stronę na server należy zmienić nazwę z localhost na np ip
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password:process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});
// console.log(__dirname)
const publicDirectory = path.join(__dirname, './public')
app.use(express.static(publicDirectory));

app.set('view engine', 'hbs');

db.connect( (error) =>{
    if(error) {
        console.log(error)
    }
    else {
        console.log("Dzieńki działa")
    }    
}
)

app.get("/", (req, res) => {
    res.render("index");
});
app.get("/register", (req, res) => {
    res.render("register");
});

app.listen(2137, () =>{
    console.log("Server Start on port 2137");
})