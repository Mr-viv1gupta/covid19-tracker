const router = require('express').Router();
const pug = require('pug');
const axios = require('axios');

// Home page route.
router.get('/', (req, res) => {
    const apiUrl = "https://api.covid19api.com/summary";
    const countries = axios.get(apiUrl).then((response) => {
        res.render("home", {
          appName: "My COVID-19 Tracker",
          pageName: "COVID-19 Cases",
          data: response.data,
        });
      })
      .catch(function (err) {
        return console.error(err);
      });
  });

// About page route
router.get('/about', (req, res) => {
    res.send('About this COVID-19 Tracker. Go <a href="/">home</a>');
});
module.exports = router;