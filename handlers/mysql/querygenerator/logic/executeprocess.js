`use strict`;

const log = (data) => (console.log("query generated..."), data);
const { generateInsertQuery, generateSelectQuery, generateDeleteQuery, generateUpdateQuery } = require('./generatequery');

module.exports = (services, data, context) => {
	console.log(data)
	let { tableName, operation, key, item } = data;

	let _generateQuery = {
		insert: () => generateInsertQuery(tableName, key, item),
		select: () => generateSelectQuery(tableName, key, item),
		delete: () => generateDeleteQuery(tableName, key, item),
		update: () => generateUpdateQuery(tableName, key, item)
	}

	return _generateQuery[operation]()
		.then(log)
		.catch((err) => {
			return Promise.reject(err);
		});
};
