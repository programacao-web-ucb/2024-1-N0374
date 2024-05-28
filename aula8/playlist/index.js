const express = require('express');
const db = require('./db');

const app = express();
const port = 3000;

app.use(express.json());

// Rota para adicionar uma música
app.post('/songs', (req, res) => {
  const { title, artist } = req.body;
  db.run('INSERT INTO songs (title, artist) VALUES (?, ?)', [title, artist], function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: this.lastID, title, artist });
  });
});

// Rota para listar todas as músicas
app.get('/songs', (req, res) => {
  db.all('SELECT * FROM songs', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});