const mysql = require("mysql")

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password:process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});
connection.connect(function(error){
    if (error) throw error
    else console.log("logowanie działa")
});
