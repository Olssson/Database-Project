const mysql = require("mysql")
const db = mysql.createConnection({
    //w nazwie hosta jak chcem wstawić stronę na server należy zmienić nazwę z localhost na np ip
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password:process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});
exports.register = (req, res) => {
    console.log(req.body);

    const name = req.body.name;
    const surname = req.body.surname;
    const BirthDate = req.body.BirthDate;
    const email = req.body.email;
    const password = req.body.password;
    const passwordConfirm = req.body.passwordConfirm;

    db.query("SELECT E-mail FROM klient WHER E-mail = ?", [email], (error, results) => {
        if(error){
            console.log(error)
        }

        if(results.lenght > 0){
            return res.render('register', {
                message: 'Już istnieje użytkownik z takie E-mailem'
            })
        }
        else if (password !== passwordConfirm) {
        return res.render('register', {
            message: 'Złe hasło'
        });
    }    
    })
    res.send("Zarejestrowałeś się")
}