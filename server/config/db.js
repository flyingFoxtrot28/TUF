const mysql = require('mysql2');
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: "Deep@nshu2544",
  database: 'banner_db'
});

module.exports = db;
