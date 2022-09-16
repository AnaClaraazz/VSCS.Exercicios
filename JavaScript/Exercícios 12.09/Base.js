let base, altura, x;
base = prompt("Insira o valor de base: ");
if(base > 0){
    alert("Insira o valor da altura ");
    if(altura > 0){
        x=(base*altura)/2
        alert("A área do triângulo é de " + x);
    }else{
        alert("Altura igual ou maior que 0");
    }

}else{
    alert("Base maior ou menor que 0");
}