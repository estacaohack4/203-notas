// Dados de entrada
let p1 = 1;
let p2 = 8;
let p3 = 7;
let trabalho = 6;
let licao = 2;

let total = p1 + p2 + p3 + trabalho + licao;
let resultado = total / 4;
let letra;

if(resultado < 5){
    letra = "I";
} else if(resultado < 7){
    letra = "R";
} else if (resultado < 9){
    letra = "B";
} else{
    letra = "MB";
}

if(letra == "I"){
    console.log("Aluno foi reprovado com a menção I");
}else{
    console.log(`Aluno foi aprovado com a menção ${letra}.`);
}
