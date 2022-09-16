/*1 - Criar uma função para calcular a 
porcentagem de um número*/

let n1,n2,porcentagem
n1 = prompt("Digite o valor que deseja saber a %: ");
n2 = prompt("Digite a %: ");
function valor (n1,n2){
    porcentagem = n1 * n2 / 100;
    return alert(porcentagem + "%");
}
valor(n1,n2);