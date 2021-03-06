const express = require('express');
const req = require('express/lib/request');
const router = express.Router();
const mysql = require('mysql');
var moment = require('moment');
const connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'login'
});

// const showProducts = require('../public/script')


router.get('/', (req,res) => {
	if (req.session.loggedin) {
		res.render('index');
	} else {
		res.render('niezalogowany');
	}
    
});
router.get('/register', (req,res) => {
    res.render('register');
});


router.get('/login', (req,res) => {
    res.render('login');
});

router.get('/admin', (req,res) => {
	try {
		if (req.session.type == 1) {
			res.render('admin');
		}
	}
	catch {
		
	}
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
				request.session.type = results[0].type;
				request.session.name = results[0].name;
				request.session.surname = results[0].surname;
				request.session.BirthDate = results[0].BirthDate;
				console.log("login moment")

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

// router.get('/', showProducts)

// router.post('/admin', function(request, response) {
// 	console.log("Poważnie? To zaiste fenomenalnie")
	
// 		connection.query('SELECT * FROM product', function(error, results, fields) {
// 			if (results.length > 0) {
// 				request.session = products
// 				// request.session.loggedin = true;
// 				// request.session.email = email;
// 				// request.session.type = results[0].type;
// 				// request.session.name = results[0].name;
// 				// request.session.price = results[0].price;
// 				// request.session.checkage = results[0].checkage;
// 				console.log("No to pauza")

// 				response.redirect('/admin');
// 			} else {
// 				response.send('Coś poszło nie trak');
// 			}
// 			response.end();
// 		});
// });
router.get('/user', function(request, response) {
	if (request.session.loggedin) {
		
		connection.query('SELECT * FROM login WHERE email = ?', [request.session.email], function(error, results, fields) {
			// response.end();
			var dateNow = new Date()
			var DateNow = dateNow.toISOString().split('T')[0]
			var DateUser = results[0].BirthDate.toISOString().split('T')[0]
			if(parseInt(DateNow)-parseInt(DateUser) >= 18){
				var adult = "Jesteś pełnoletni"
			}else{
				var adult =  "Jesteś niepełnoletni"
			}
			console.log(adult)
			if(request.session.type == 0){
				var admin = 'nie jesteś adminem'
			}else{
				var admin = 'witaj admin'
			}
			if(admin == 'witaj admin'){
				response.render('admin', {
					DateUser: request.session.DateUser,
					adult: request.session.adult,
					email: request.session.email,
					name: request.session.name,
					surname: request.session.surname,
					BirthDate: request.session.BirthDate,
					});
			}else{
				response.render('user', {
					DateUser: request.session.DateUser,
					adult: request.session.adult,
					email: request.session.email,
					name: request.session.name,
					surname: request.session.surname,
					BirthDate: request.session.BirthDate,
		
					});
				}
		});
        
	} else {
		response.redirect('/');
	}
});
module.exports = router;