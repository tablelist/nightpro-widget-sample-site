'use strict';

const express = require('express');

const app = express();

app.use('/index.html', express.static('./index.html'));
app.use('/src', express.static('./src'));

module.exports = app;
