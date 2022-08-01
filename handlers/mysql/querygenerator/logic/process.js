'use strict';
const executeProcess = require('./executeprocess');

module.exports = (services, ipPrams) => {
	let context = {
		user: 'MasterApp',
		client: 'Master'
	};

	return executeProcess(services, ipPrams, context)
		.then((_result) => {
			return Promise.resolve(_result);
		})
		.catch((err) => {
			throw err;
		});
};
