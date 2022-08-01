'use strict';

const app = require('express')();
const routes = require('./handlers');

const PORT = process.env.PORT || 3000;

app.use(require('express').json());


//  Connect all our routes to our application
app.use('/', routes());

// Turn on that server!
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
