const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    
    res.send('Welcome to My API !');
 
});

router.get('/home', (req, res, next) => {
    res.json({
        status: 'API Its Working',
        message: 'My Home'
    });
});

router.get('/users', (req, res, next) => {
    res.json({
        status: 'API Its Working',
        message: 'My User List'
    });
});

router.get('/data', (req, res, next) => {
    res.json({
        status: 'API Its Working',
        message: 'All data you need for Survey.'
    });
});

router.get('/admin', (req, res, next) => {
    res.json({
        status: 'API Its Working',
        message: 'My Administrator Page !'
    });
});


module.exports = router;