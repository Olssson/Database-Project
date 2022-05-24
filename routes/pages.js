const express = require('express');
const req = require('express/lib/request');
const router = express.Router();
const mysql = require('mysql');
const connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'login'
});


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
	if (email && password) {
        

		connection.query('SELECT * FROM login WHERE email = ? AND password = ?', [email, password], function(error, results, fields) {
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.email = email;
				request.session.name = results[0].name;
				request.session.surname = results[0].surname;
				request.session.BirthDate = results[0].BirthDate;

				console.log(results[0].password)
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
});

router.get('/user', function(request, response) {
	if (request.session.loggedin) {
		
		connection.query('SELECT * FROM login WHERE email = ?', [request.session.email], function(error, results, fields) {
			console.log(results[0].password);
			console.log(results[0].name);
			console.log(results[0].BirthDate);		
			console.log(results[0].surname);	
			// response.end();
		});
		response.render('user', {
            email: request.session.email,
		 	name: request.session.name,
			surname: request.session.surname,
			BirthDate: request.session.BirthDate,
         	})
        
	} else {
		response.send('Please login to view this page!');
	}
});


module.exports = router;