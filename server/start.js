require('newrelic');
const app = require('./server.js');

app.listen(process.env.PORT || 3002);
