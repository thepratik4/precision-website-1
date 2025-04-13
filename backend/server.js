// server.js (ESM version)
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to MySQL database.');
});

app.post('/api/contact', (req, res) => {
  const { name, email, company, phone, plant, subject, message } = req.body;

  const sql = `INSERT INTO contacts (name, email, company, phone, plant, subject, message)
               VALUES (?, ?, ?, ?, ?, ?, ?)`;

  db.query(sql, [name, email, company, phone, plant, subject, message], (err, result) => {
    if (err) {
      console.error('Failed to insert data:', err);
      return res.status(500).send('Server error');
    }
    res.status(200).send('Message received');
  });
});
app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
