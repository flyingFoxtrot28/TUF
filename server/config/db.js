const mysql = require('mysql2');
const db = mysql.createConnection({
  host: 'sql12.freemysqlhosting.net',
  user: 'sql12725326',
  password: "TZW7ntxZl1",
  database: 'sql12725326',
  port: 3306 
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database.');

  // SQL query to create a table
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS banner_table (
    id INT AUTO_INCREMENT PRIMARY KEY,
    description VARCHAR(255) NOT NULL,
    timer INT NOT NULL,
    link VARCHAR(255),
    is_visible BOOLEAN DEFAULT TRUE
);
  `;

  // Execute the query
  db.query(createTableQuery, (err, result) => {
    if (err) {
      console.error('Error creating table:', err.stack);
    } else {
      console.log('Table created successfully:', result);
    }
  });
});

module.exports = db;