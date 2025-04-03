const fs = require('fs');
const mysql = require('mysql2');
const path = require('path');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'user',  
  password: 'password',  
  database: 'banks_db',
  port: 3307
});

// Ensure the table exists
const createTableQuery = `
  CREATE TABLE IF NOT EXISTS banks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    country VARCHAR(255) NOT NULL,
    bank_name VARCHAR(255) NOT NULL
  );
`;

connection.query(createTableQuery, (error) => {
  if (error) throw error;
  console.log('Table ensured.');
  
  // Read the CSV file
  const filePath = path.join(__dirname, 'banks.csv');
  const fileContents = fs.readFileSync(filePath, 'utf8').trim();
  const rows = fileContents.split('\n').slice(1); // Skip header

  if (rows.length === 0) {
    console.log('No data to insert.');
    connection.end();
    return;
  }

  // Prepare batch insert query
  const values = rows.map(row => {
    const [country, bankName] = row.split(',').map(item => item.trim());
    return [country, bankName];
  });

  const insertQuery = 'INSERT INTO banks (country, bank_name) VALUES ?';

  // Execute batch insert
  connection.query(insertQuery, [values], (error) => {
    if (error) throw error;
    console.log('Data imported successfully!');
    connection.end();
  });
});
