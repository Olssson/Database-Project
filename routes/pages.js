const express = require('express');
const { route } = require('express/lib/application');

const router = express.Router();

router.get('/', (req, res) =>{
    res.render('index');
});

router.get('/register', (req, res) =>{
    res.render('register');
});


module.exports = router;
