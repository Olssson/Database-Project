//npm start
const express = require("express");
const mysql = require("mysql")
const dotenv = require("dotenv");
const path = require('path')
// const { path } = require("express/lib/application");

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
const publicDirectory = path.join(__dirname)
// const publicDirectory = __dirname + '\\views'
console.log(publicDirectory)
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
    res.send("<h1>DYZIO</h1>")
});

app.listen(2137, () =>{
    console.log("Server Start on port 2137");
})