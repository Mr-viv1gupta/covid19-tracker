const express = require('express');
const app = express();
const routes = require('./routes');
const { route } = require('./routes');
const PORT = 3000;

// route calls 
app.use(`/`, routes);

// Server Started
app.listen(PORT, () => console.log(`Server started at the localhost port no ${PORT}`));