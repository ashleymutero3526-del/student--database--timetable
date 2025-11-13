const mysql = require('mysql2/promise');
require('dotenv').config(); // Loads values from .env

// Create a connection pool (faster than connecting each time)
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10
});

module.exports = pool;
