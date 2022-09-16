let cod, num, sal, salex, exc;

cod = prompt("Digite o código do trabalhador: ");
num = prompt("Quantas horas trabalhadas ? ");
sal = num * 10
if(num > 50){
    exc = num - 50
    salex = sal + (exc * 20);
    alert("Seu salário: R$ " + sal);
    alert("Seu salário com horas extras é: R$ " +salex);
}else{
    alert("Pra ganhar tem que trabalhar!");

}
