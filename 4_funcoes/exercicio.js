//resposta aqui
let r = require ("readline-sync");


function soma (valor1,valor2){

    let resultado = valor1 + valor2;
    return resultado;
}

function subtrair (valor1,valor2){
    
    let resultado = valor1 - valor2;
    return resultado;
}

function multiplicaçao (valor1,valor2){
    
    let resultado = valor1 * valor2;
    return resultado;
}

function divisão (valor1,valor2){
    let resultado = valor1 / valor2;
    return resultado;
}

let escolhaValor1 = parseInt (r.question ("Escolha o primeiro numero:"));

let escolhaValor2 = parseInt (r.question ("Escolha o segundo numero:"));


let escolhaOperação = parseInt (r.question ("Escolha a operacao matematica( + - * /): "));

//let valor1 = escolhaValor1;

//let valor2 = escolhaValor2;


switch (operaçãoEscolhida){
    case soma: 
        console.log (`O resultado da soma é ${resultado}`)
         break;
    case subtrair:
        console.log (`O resultado da subtração é ${resultado}`)
        break;
    case multiplicaçao: 
        console.log (`O resultado da multiplicação é ${resultado}`)
        break;
    case divisão: 
        console.log (`O resultado da divisão é ${resultado}`)
    default: 
        console.log (`Operação inválida`)
        break;
}