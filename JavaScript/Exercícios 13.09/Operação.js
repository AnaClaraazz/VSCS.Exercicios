/*2- Obtenha um número digitado pelo usuário e repita a operação de multiplicar ele por
três (imprimindo o novo valor) até que ele seja maior do que 100. Ex.: se o usuário
digita 5, deveremos observar na tela a seguinte sequência: 5 15 45 135.*/

let n;
n = prompt("Insira um número: ");
while(n < 101){
    alert("Obteve a sequência de: " + n);
    n= n * 3
}