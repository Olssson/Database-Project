//npm start
const express = require("express");
const mysql = require("mysql")

const app = express("express");

const db = mysql.createConnection({
    //w nazwie hosta jak chcem wstawić stronę na server należy zmienić nazwę z localhost na np ip
    host: "localhost",
    user: 'root',
    password:'',
    database:'login'
});

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