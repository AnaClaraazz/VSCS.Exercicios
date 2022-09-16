let mediasalario = 0.0, totalsalario = 0.0, salario,
maximopessoas = 5, totalfilhos = 0, menoscem = 0, numerofilhos, i;

for(i = 0; i < maximopessoas ; i ++){
    salario = prompt("\nDigite seu salário: R$ ");
    numerofilhos = prompt("\nDigite quantos filhos você tem: ");
    totalsalario = parseFloat(totalsalario) + parseFloat(salario);
    totalfilhos = parseInt(totalfilhos) + parseInt(numerofilhos);
if (salario < mediasalario){
        mediasalario = parseFloat(salario);
}

if (salario <= 100){
        parseFloat(menoscem++);
        
    }
}
mediasalario = salario / 5;
totalfilhos = parseInt(totalfilhos) / 5;
menoscem = parseFloat(menoscem) / 5 * 100;
alert("\n A média do salario da população é R$ " + mediasalario.toFixed(2) + " por habitante" + "\n A média de filhos da população é " + totalfilhos + "% por habitante" + "\n O maior salário é R$ " + mediasalario + "\n O percentual de pessoas com salário de até R$ 100 é de " + menoscem + "%");


