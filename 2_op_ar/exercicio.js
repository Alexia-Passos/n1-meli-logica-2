//resposta aqui
//var a = parseInt(r.question("Digite 1 ou 2"));

var r = require("readline-sync");

let nomeDoProduto = ['maça', 'banana','pêra', 'ameixa'];
let precoDoProduto = ['2.00', '3.00', '2.50', '4.00'];

let posicaoDoProduto = parseInt (r.question ("'Escolha um produto de 0 a 3'")) ['0','1','2','3'];
let porcentagemDigitada = parseInt (r.question("Digite uma porcetagem de 0 a 50%"));

console.log (posicaoDoProduto);
console.log (porcentagemDigitada);



/*A loja Lumelância precisa de uma nova função no seu sistema para calcular um desconto nos seus produtos.

Você deverá seguir os seguintes passos:

- Crie uma variável que irá guardar o array com nome e valor dos produtos
- Crie uma variável 'posicao' para guardar o produto escolhido pelo usuário
- Crie uma variável 'porcentagem' que irá guardar qual porcentagem o usuário digitou
- Procure no array qual produto foi escolhido pelo usuário
- Calcule o desconto do produto
- Printe na tela a seguinte frase: "Produto xxx com desconto é R$ xxx"

Dica: você pode usar a função .toFixed(digits) para limitar o numero de casas decimais do desconto.
*/ 