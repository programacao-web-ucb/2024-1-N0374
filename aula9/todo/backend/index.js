const express = require('express');
var cors = require('cors')

const app = express();
const port = 8000;
app.use(cors())

app.use(express.json());

var todos = [
    {"name": "lavar a louça", "done": true},
    {"name": "estudar", "done": false}
]

// Rota para listar as tarefas
app.get('/todos', (req, res) => {
    res.send(JSON.stringify(todos))
});
 
app.post('/todos', (req, res) => {
  const { name, status } = req.body;
  todos.push({name: name, done: status})
  res.send(JSON.stringify(todos))
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});