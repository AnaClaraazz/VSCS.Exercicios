/*5 -  Crie uma função que dado dois valores (passados como parâmetros) 
mostre no console a soma, subtração, multiplicação e divisão desses valores.*/

let n1, n2, soma, sub, mult, div;
n1 = prompt("Digite um valor: ");
n2 = prompt("Digite um valor: ");
function valores(n1,n2){
  soma = (+n1) + (+n2);
  sub = n1 - n2;
  mult = n1 * n2;
  div =  n1 / n2;
//return alert ("A soma: " + soma + "\nA subtração: " + sub + "\nA multiplicação: " + mult + "\nA divisão: " + div);
console.log("A soma: " + soma + "\nA subtração: " + sub + "\nA multiplicação: " + mult + "\nA divisão: " + div);
}
valores(n1,n2)