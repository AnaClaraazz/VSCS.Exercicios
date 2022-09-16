/*2 - Criar uma função que converta uma temperatura 
de Celsius para Fahrenheit*/

let TC, resultado;
TC = prompt("Digite a temperatura em °C a ser convertida em °F: ");
function Fahrenheit(TC){
    resultado = TC * 1.8 + 32
    return alert("Temperatura em " + TC + "°C" + "\nConvertido em " + resultado + "°F");

}
Fahrenheit(TC)