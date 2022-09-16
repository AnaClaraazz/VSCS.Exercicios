/*6 - Crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondente como uma string. 
Por exemplo, se a entrada for 2, a função deverá retornar “fevereiro”, pois este é o 2° mês.*/

let mes;
mes = prompt("Coloque o número de um mês: ");
function calendario(mes){
    if(mes == 1){
        alert("Janeiro");
    }else if(mes == 2){
        alert("Fevereiro");
    }else if(mes == 3){
        alert("Março");
    }else if(mes == 4){
        alert("Abril");
    }else if(mes == 5){
        alert("Maio");
    }else if(mes == 6){
        alert("Junho");
    }else if(mes == 7){
        alert("Julho");
    }else if(mes == 8){
        alert("Agosto");
    }else if(mes == 9){
        alert("Setembro");
    }else if(mes == 10){
        alert("Outubro");
    }else if(mes == 11){
        alert("Novembro");
    }else if(mes == 12){
        alert("Dezembro");
    }
    

}
calendario(mes);