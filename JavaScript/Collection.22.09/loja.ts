/*Crie uma um programa para trabalhar com estoque de uma loja, o programa deverá trabalhar com 
Collection do tipo Array de JavaScript para manipular os dados desse estoque, 
o programa deverá atender as seguintes funcionalidades:
Armazenar dados da Array
Remover dados da Array;
Atualizar dados da Array.
Apresentar todos os dados da Array.*/

let loja: string[] = []

loja.push('Xiaomi mi 8 lite', 'Redmi note 10', 'iPhone 11 plus', 'Sansung Galaxy AS20', 'Moto E 10', 'Moto Z plus');
console.log(loja);

loja.shift();
console.log(loja);

loja.splice(2, 3,'Xiaomi mi 11 pro','Wuaiwei');
console.log(loja);