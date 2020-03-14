const mysql = require('mysql');
const dbOption = require('../config/db.js');

const db = mysql.createConnection(dbOption);

db.connect();

module.exports = db;