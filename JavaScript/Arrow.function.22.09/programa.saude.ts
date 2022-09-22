/*Crie uma um programa de saúde, nesse programa desenvolva uma Arrow functions 
que calcula o imc de pacientes, a função deverá receber os  seguintes parâmetros, peso e altura.*/


let imc = (peso: number, altura: number) => peso / (altura ** 2);
console.log(imc(89, 1.65));