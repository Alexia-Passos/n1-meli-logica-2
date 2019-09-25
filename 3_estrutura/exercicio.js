//resposta aqui
let r = require ("readline-sync");

let produtos = [
    {nome: 'bolacha', tempoDeValidade: 100, congelado: false},
    {nome: 'nescau', tempoDeValidade: 200, congelado: false},
    {nome: 'aveia', tempoDeValidade: 20, congelado: false},
    {nome: 'lasanha', tempoDeValidade:50, congelado: true}

];
let selecionarProduto = parseInt (r.question ("Escolha um produto entre 0 e 3: "));

let validadeRestante = parseInt (r.question ("Digite quantos dias faltam para vencer: "));

let produtoSelecionado = produtos [selecionarProduto];

let porcentagem = (validadeRestante * 100)/produtoSelecionado['tempoDeValidade'];

if (porcentagem <= 2)
{

        console.log (`Descartar produto, muito proximo de vencer`);

    }else if (produtoSelecionado ['congelado']== false && porcentagem <= 10) {

        console.log (`Desconto!  Produto não congelado e próximo da validade.`)
        
    } else if (produtoSelecionado ['congelado']== true && porcentagem <= 5) {

        console.log (`Desconto! Produto congelado e próximo da validade.`)
   
}else {

    console.log (`Produto longe do vencimento.`)
}
