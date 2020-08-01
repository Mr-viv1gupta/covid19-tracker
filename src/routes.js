const router = require('express').Router();
const pug = require('pug');

// Home page route.
router.get('/', (req, res) => {
    res.render('home');
    // res.send('Hello World. Learn <a href="/about">about this app</a>');
});

// About page route
router.get('/about', (req, res) => {
    res.send('About this COVID-19 Tracker. Go <a href="/">home</a>');
});
module.exports = router;