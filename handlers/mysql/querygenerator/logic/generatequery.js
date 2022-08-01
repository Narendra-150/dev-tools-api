const Promise = require('bluebird');

let generateInsertQuery = (tableName, key, item) => {
	let sqlQuery = `INSERT INTO ${tableName}
		( ${Object.keys(item).map((column) => column).join(', ')} )
	VALUES
		( ${Object.entries(item).map(([, value]) => (value ? (typeof value === 'string' ? "'" + value + "'" : value) : 'null')).join(', ')} )`;

	return Promise.resolve(sqlQuery);
};

let generateSelectQuery = (tableName, key, item) => {
	if (!key || !Object.keys(key).length) key = { 1: 1 };
	if (!item) item = [];

	let sqlQuery = `SELECT ${item.length ? item.map((column) => column).join(', ') : '*'} 
	FROM 
	  ${tableName} 
	WHERE
	  ${Object.entries(key).map(([column, value]) => column + '=' + (typeof value === 'string' ? "'" + value + "'" : value)).join(' AND ')};`;

	return Promise.resolve(sqlQuery);
};

let generateDeleteQuery = (tableName, key, item) => {
	let sqlQuery = `DELETE FROM ${tableName} 
	WHERE
		${Object.entries(key).map(([column, value]) => column + '=' + (typeof value === 'string' ? "'" + value + "'" : value)).join(' AND ')};`;

	return Promise.resolve(sqlQuery);
};

let generateUpdateQuery = (tableName, key, item) => {
	let sqlQuery = `UPDATE ${tableName} 
	SET 
		${Object.entries(item).map(([column, value]) => value && column + '=' + (typeof value === 'string' ? "'" + value + "'" : value)).join(', ')} 
	WHERE
		${Object.entries(key).map(([column, value]) => column + '=' + (typeof value === 'string' ? "'" + value + "'" : value)).join(' AND ')};`;

	return Promise.resolve(sqlQuery);
};

module.exports = { generateInsertQuery, generateSelectQuery, generateDeleteQuery, generateUpdateQuery };
