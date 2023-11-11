const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!!'));

app.listen(port, () => console.log(`Backend server listening on port ${port}!`));

const { Pool } = require('pg');
const pool = new Pool({
  user: 'user',
  host: 'db',
  database: 'mydatabase',
  password: 'password',
  port: 5432,
});

app.get('/data', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM my_table');
      res.json(result.rows);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
});

