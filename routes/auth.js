const express = require('express');
const { route } = require('express/lib/application');

const router = express.Router();

router.post('/', (req, res) =>{
    res.render('index');
});

module.exports = router;
