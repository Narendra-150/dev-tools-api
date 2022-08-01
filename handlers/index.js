'use strict'

const routes = require('express').Router({ mergeParams: true });

module.exports = (services) => {
    routes.use('/api/v1/demo', require('./demo')(services));
    routes.use('/api/v1/querygenerator', require('./mysql/querygenerator')(services));
    routes.use('/api/v1/csvtodatabase', require('./filesystem/csvtodatabase')(services)); //to do

    routes.get('/', (req, res) => {
        res.status(200).json({ message: 'Connected!' });
      });

    return routes;
};