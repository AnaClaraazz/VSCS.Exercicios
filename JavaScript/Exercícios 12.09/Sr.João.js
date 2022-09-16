let peso, multa = 4.00, ex;

peso = prompt("Quantos Kg de tomate, Sr.João está levando hoje?");

if(peso <= 49){
    alert("Sem exedência de kg");

}else if(peso >= 51){
    ex = peso - 50
    multa=ex * 4.00
    alert("Opa " +peso+ " KG" + "\nAplicando multa R$ 4,00" + "\nValor a ser pago com adicional de multa R$ " +multa);
    
}else{
    alert("Não levou nada!");
}
