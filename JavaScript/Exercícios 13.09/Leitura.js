/*Elaborar um programa que efetue a leitura sucessiva de valores numéricos e
apresente no final o total do somatório, a média e o total de valores lidos. O programa
deve fazer as leituras dos valores enquanto o usuário estiver fornecendo valores
positivos. Ou seja, o programa deve parar quando o usuário fornecer um valor
negativo.*/

let numero = 0.0, soma = 0.0, media, total = 0.0
    while(numero >= 0){
        numero = prompt("Insira um número: ");

        if(numero >= 0){
            soma = parseInt(soma)+parseInt(numero);
            total++
        }
    }

    media = soma / total;
    alert("Soma de todos os números: " + soma + "\nMédia dos números: " +media.toFixed(2) + "Total dos números: " + total);