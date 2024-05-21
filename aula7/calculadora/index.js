const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

function retornoBasico(req, res){
    res.send("Olá, mundo!")
}

function retornaHorario(req, res){
    let hour = new Date();
    res.send(hour.toString());

}

function soma(req, res){
    let {valor1, valor2} = req.body;
    console.log(`realizando soma: ${valor1} + ${valor2}`);
    res.send(JSON.stringify({"resultado": valor1 + valor2 }));
}

function divisao(req, res){
    let {valor1, valor2} = req.body;
    if(valor2 == 0){
        res.status(400).send(
            JSON.stringify(
                {"resultado": "Erro! Denominador é 0 e o servidor não pode fazer a divisão!!!!"}))
    }
    console.log(`realizando divisão: ${valor1}/${valor2}`);
    res.send(JSON.stringify({"resultado": valor1/valor2 }));
}

function somaGet(req, res){
    res.status(405).send("Não pode GET na soma!")
}

app.get("/", retornoBasico);
app.get("/horario", retornaHorario);
app.get("/soma", somaGet)
app.post("/soma", soma);
app.post("/divisao", divisao);


app.listen(8000);