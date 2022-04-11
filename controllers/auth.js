const mysql = require("mysql")
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const async = require("hbs/lib/async");
const db = mysql.createConnection({
    //w nazwie hosta jak chcem wstawić stronę na server należy zmienić nazwę z localhost na np ip
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password:process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});
exports.register = (req, res) => {
    console.log(req.body);

    const {name, email, surname, BirthDate, password, passwordConfirm} = req.body;

    db.query("SELECT E-mail FROM klient WHER E-mail = ?", [email], async (error, results) => {
        if(error){
            console.log(error)
        }

        if(results.lenght > 0){
            return res.render('register', {
                message: 'Już istnieje użytkownik z takie E-mailem'
            })
        }else if (password !== passwordConfirm) {
        return res.render('register', {
            message: 'Złe hasło'
            });
        }
        
        let hashedPassword = await bcrypt.hash(password, 7);
        console.log(hashedPassword);
    });
}