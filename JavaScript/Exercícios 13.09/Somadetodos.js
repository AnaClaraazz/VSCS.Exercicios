let numero = 0, soma = 0;
numero = prompt("Digite um número: ");
do{
    soma = parseInt(soma) + parseInt(numero);
    numero --
    alert(soma)
}while(numero >= 0);
