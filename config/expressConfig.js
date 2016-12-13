'use strict';

const express = require('express');

const app = express();

app.use('/index.html', express.static('./index.html'));
app.use('/event-detail.html', express.static('./event-detail.html'));
app.use('/events.html', express.static('./events.html'));
app.use('/reservations.html', express.static('./reservations.html'));
app.use('/tablelist.html', express.static('./tablelist.html'));
app.use('/src', express.static('./src'));

module.exports = app;
