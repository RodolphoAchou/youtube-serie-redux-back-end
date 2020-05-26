const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3333;

mongoose.connect('mongodb://localhost/shoppingcar', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

app.use(cors());
app.use(express.json());
app.use(routes);
app.set('PORT', PORT);

module.exports = app;