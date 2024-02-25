// In your route file or server.js

const express = require('express');
const pool = require('./db/pool'); // Adjust the path based on your project structure
const app = express();
const port = 3001;

app.get('/data', async (req, res) => {
  try {
    console.log("req 1");
    const { rows } = await pool.query('SELECT * FROM students');
    res.json(rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

app.get("/", async (req, res) => {
    res.send('hello world!')
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
