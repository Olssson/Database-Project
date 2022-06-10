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

    db.query("SELECT `email` FROM login WHERE `email` = ?", [email], async (error, results) => {
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
        
        db.query('INSERT INTO login SET ?', {name: name, surname:surname, email:email, password:password , BirthDate:BirthDate}, (error, results)=>{
            if(error) {
                console.log(error);
            } else {
                console.log(results);
                return res.render('register', {
                    message: 'User Register'
                    });
            }
        })
        res.redirect('/login')
        console.log(hashedPassword);
    });
}

exports.admin = (req, res) => {
    console.log("dzienki działa")
    
    const {name, price, check18} = req.body;
    console.log(req.body);
    
    db.query("SELECT `name` FROM product WHERE `name` = ?", [name], async (error, results) => {
        console.log("dzienki")
        var resultName = results;
        console.log(resultName);        
        if(resultName.lenght > 0){
            return res.render('admin', {
                message: 'Już istnieje produkt o takiej nazwie' 
            })
        }

        
    if (check18 == "on"){
        console.log("niepoiwem")
        checkage18 = 1
    }
    else {
        checkage18 = 0
    };
            
    db.query('INSERT INTO product SET ?', {name:name, price:price, checkage:checkage18}, (error, results)=>{
        if(error) {
            console.log(error);
        } else {
            console.log(results);
            return res.render('admin', {
                message: 'ok'
                });
        }
    })
    });
}