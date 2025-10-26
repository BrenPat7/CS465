var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { 
        title: 'Home',
        nav: { home: 'selected' },
        year: new Date().getFullYear()
    });
});

router.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Us',
        nav: { about: 'selected' },
        year: new Date().getFullYear()
    });
});

router.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Contact Us',
        nav: { contact: 'selected' },
        year: new Date().getFullYear()
    });
});

router.post('/contact', (req, res) => {
    console.log(req.body); 
    res.redirect('/contact');
});

module.exports = router;