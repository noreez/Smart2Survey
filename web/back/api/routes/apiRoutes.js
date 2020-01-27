const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    return res.send('Welcome to my api !')
});

router.get('/home', (req, res, next) => {
    return res.send('My Home')
});

router.get('/users', (req, res, next) => {
    return res.send('My users list')
});

router.get('/data', (req, res, next) => {
    return res.send('All data to need for survey !')
});

router.get('/admin', (req, res, next) => {
    return res.send('My Administrator page !')
});


module.exports = router;