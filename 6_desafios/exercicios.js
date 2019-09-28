var r = require("readline-sync");

/*for (let i=1; i < 100; i++){
    if (i % 2 === 0)
    console.log (i);
}
console.log (`Acabaram os números`)
*/

/*EXERCICIO 2
let num = parseInt (r.question("digite aqui um numero: "))
let n1 = ""

let cont = 0

while (cont < num){
    n1 += "*"
    console.log (n1)
    cont++;
}
console.log ("A piramide acabou!")
*/

/*EXERCICIO 3

let nome = r.question("Digite o seu nome: ");
console.log ("Olá + nome");

let texto = "";
for(;texto != "tchau";){

}
texto = r.question ("Digite algum texto, mas para sair digite tchau");

*/

/* EXERCICIO 4
let passos = 0;
const meta = 500;
for (;passos<meta;){
    passo += parseInt (r.question("Informe a quantidade de passos: "))
}
console.log ("parabens, voce atingiu a meta")
*/
/* EXERCICIO 5
for (let num = 10; num += 1;--){
   console.log (numero);
}
*/

let array = [5,37,18,59,12,-5];
let maior = 0;
let menor = 0;
for (let i=0;i<array.length;i++){
    if(array[i]>maior){
        maior = array[i];
    }
     if(array[i]<menor){
         menor = array[i];
     }   
}
console.log ("Maior: " +maior+". Menor")
