'use strict';

const appConfig = require('./config/appConfig');
const app = require('./config/expressConfig');

app.listen(appConfig.PORT, () => {
  console.log(`Listening on port: ${appConfig.PORT}`);
});

module.exports = app;
