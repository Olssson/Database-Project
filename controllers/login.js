const mysql = require("mysql")

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database : "login"

});

connection.connect(function(error){
    if (error) throw error
    else console.log("logowanie działa")
})
