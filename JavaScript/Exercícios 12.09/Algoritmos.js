let valor, valortotal
let numero 
const taxa = 0.02

valor = prompt("Valor do produto escolhido: ");
numero = parseFloat(valor)*taxa;
valortotal = parseFloat(numero) + valor;

alert("Subtotal de sua compra com a taxa de entrega: " + valortotal );

