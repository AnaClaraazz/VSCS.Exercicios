/*4 - Crie uma um programa de saúde, 
nesse programa desenvolva uma função que calcula o imc de pacientes, 
a função deverá receber os  seguintes parâmetros, peso e altura.*/

let peso, altura, imc;

peso = prompt("Seu peso: ");
altura = prompt("Sua altura: ");
function pacientes(peso, altura){
    imc = peso / (altura**2);
    return alert("Seu IMC é: " + imc.toFixed(3) + "KG");
}
pacientes(peso,altura);