let nota = parseInt(prompt("insira uma nota: "));

const nomeInstituicao = "UCB";
const notaParaPassar = 7;
const notaMaxima = 10;

console.log("nota:", nota);
console.log("nome da instituicao:", nomeInstituicao);

let situacao;
if(nota >= notaParaPassar){
    situacao = "aprovado";
} else {
    situacao = "reprovado";
}

if(nota === notaMaxima){
    console.log("aluno tirou nota maxima!!!");
    // situacao só é definida fora do escopo do if porque é variável let
    // console.log("situacao: ", situacao);
}

console.log("situacao: ", situacao);