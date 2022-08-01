`use strict`;
const loaddata = require('./loaddata');
// const generatedata = require('./generatedata');


let dataLoadProcess = (services, context) => {
	const generatedata = require('./generatedata');


	let _loaddata = () => loaddata(context);
	let _generatedata = (data) => generatedata(context);

	return _loaddata()
	.then(_generatedata)
	.catch((err) => {
		return Promise.reject(err);
	});
};

module.exports = (services, context) => {
	return dataLoadProcess(services, context);
};
