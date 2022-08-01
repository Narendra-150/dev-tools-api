'use strict';
const processMessage = require('./logic/process');

module.exports = (services) => {
	return (req, res, next) => {
		res.setTimeout(1800000, function() {
			console.log('Request has timed out.');
			res.send(408);
		});
		let ipPrams=req.body || 'Test';

		return processMessage(services, ipPrams)
			.then((_result) => {
				res.status(200).send(_result);
			})
			.catch(next);
	};
};
