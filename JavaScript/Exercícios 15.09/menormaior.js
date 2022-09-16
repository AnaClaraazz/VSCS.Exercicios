/*1 - Faça um programa que recebe três números do usuário, 
e identifica o maior através de uma função e o menor número através de outra função.*/

let n1, n2, n3, menor, maior;
n1 = prompt("Digite o 1° número: ");
n2 = prompt("Digite o 2° número: ");
n3 = prompt("Digite o 3° número ");
maior = numerosmaiores(n1, n2, n3);
menor = numerosmenores(n1, n2, n3);

function numerosmaiores (n1, n2, n3){
    if(n1 > n2 && n1 > n3){
     
      alert(n1 + " É o maior entre os números inseridos");
   
   }else if(n2 > n1 && n2 > n3){
       
      alert(n2 + " É o maior entre os números inseridos");
  
   }else if(n3 > n1 && n3 > n2){
       
      alert(n3 + " É o maior entre os números inseridos");
    }
}



function numerosmenores (n1, n2, n3){
    if(n1 < n2 && n1 < n3){
   
      alert(n1 + " É o menor entre os números inseridos");
   
   }else if(n2 < n1 && n2 < n3){
   
      alert(n2 + " É o menor entre os números inseridos");
   
   }else if(n3 < n1 && n3 < n2){
   
      alert(n3 + " É o menor entre os números inseridos");
   
   }

}
