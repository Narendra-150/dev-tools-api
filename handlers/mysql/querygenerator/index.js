'use strict';

const routes = require('express').Router({ mergeParams: true });

module.exports = (services) => {
	routes.post('/', require('./execute')(services));
	return routes;
};
