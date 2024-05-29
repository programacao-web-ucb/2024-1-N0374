const express = require('express');
const operations = require('./operations');

const app = express();
const port = 3000;

app.use(express.json());

// Rota para adicionar uma música
app.post('/songs', (req, res) => {
  const { title, artist } = req.body;
  operations.addSong(title, artist);
});



// Rota para listar todas as músicas
app.get('/songs', (req, res) => {
  const handleSuccess = (result) => res.send(result)
  const handleError = (result) => res.status(500).send(result)
  operations.listSongs(handleSuccess, handleError);
});

app.delete('/songs/:id', (req, res) => {
  const handleSuccess = (result) => res.send(result)
  const handleError = (result) => res.status(500).send(result)
  operations.deleteSong(req.params.id, handleSuccess, handleError);
});




app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});