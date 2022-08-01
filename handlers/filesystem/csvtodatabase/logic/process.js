'use strict';

const fs = require('fs');
const path = require('path');
const executeProcess = require('./executeprocess');

module.exports = (services, ipPrams) => {
console.log("🚀 => 🚀  file: process.js => 🚀  line 8 => 🚀  ipPrams", ipPrams)
	let context = {
		user: 'MasterApp',
		client: 'Master',
		delay: ipPrams.delay || 1
	};

	return executeProcess(services, context)
		.then((_) => {
			return Promise.resolve("Success...");
		})
		.catch((err) => {
			throw err;
		});
};
