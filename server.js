const express = require('express');
const app = express();
const routes = require('./src/routes');
// const pug = require('pug');
const PORT = 3000;

app.set('view engine', 'pug');

// route calls 
app.use(`/`, routes);

// Server Started
app.listen(PORT, () => console.log(`Server started at the localhost port no ${PORT}`));