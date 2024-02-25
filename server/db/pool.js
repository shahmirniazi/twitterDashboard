// db.js

const { Pool } = require('pg');

const pool = new Pool({
  user: 'admin',
  host: 'db',
  database: 'db',
  password: 'password',
  port: 5432, // Default port for PostgreSQL
});

module.exports = pool;
