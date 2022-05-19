const express = require('express');
const router = express.Router();
const mysql = require('mysql');

router.get('/', (req,res) => {
    res.render('index');
});
router.get('/register', (req,res) => {
    res.render('register');
});


router.get('/login', (req,res) => {
    res.render('login');
});

router.post('/login', function(request, response) {
	var email = request.body.email;
	var password = request.body.password;
    var name = request.body.name;
    var surname = request.bisy.surname;
	if (email && password) {
        const connection = mysql.createConnection({
            host     : 'localhost',
            user     : 'root',
            password : '',
            database : 'login'
        });

		connection.query('SELECT * FROM login WHERE email = ? AND password = ?', [email, password], function(error, results, fields) {
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.email = email;
				response.redirect('/user');
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
    connection.query('SELECT * FROM login WHERE email = ?', [email])
});

router.get('/user', function(request, response) {
	if (request.session.loggedin) {
		response.render('user', {
            email: request.session.email,
        name: 'ttctfctfc'})
        
	} else {
		response.send('Please login to view this page!');
	}
});


module.exports = router;