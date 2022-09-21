import { Animal } from "./animal";

export class Cachorro extends Animal{
  
    constructor(
        nome: string,
        idade: number,
    ){
        super(nome, idade);
       
    }
    verCachorro(){
        console.log(`\nAnimal Cachorro:
        \nMeu nome é ${this.nome}
        \nTenho ${this.idade} anos de idade`);
       
    }  
    emitirBarulhoo(){
        console.log("Emito um som de latido");
    }
    correrAnimalss(){
    console.log("Corro igual um cachorro");
    
    }
      
}
    
