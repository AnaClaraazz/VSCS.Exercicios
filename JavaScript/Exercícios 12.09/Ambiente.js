let g1;
g1 = prompt("Índice do 1° grupo de empresas: ");

if(g1 >= 0.05 && g1 < 0.25){
		alert("Se mantém estável!");
}else if(g1 >= 0.3 && g1 < 0.4){
		alert("Será solicitado a paralisação do 1°grupo!");
}else if(g1 >= 0.4 && g1 < 0.5){
		alert("Será solicitado a paralisação dos grupos 1 e 2");
}else if(g1 >= 0.5){
		alert("Será solicitado a paralisação de TODOS OS 3 GRUPOS!");
}else{ 
    
		alert("TA EM SP?");

}   

