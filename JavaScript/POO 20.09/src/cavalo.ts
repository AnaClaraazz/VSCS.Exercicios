import { Animal } from "./animal";

export class Cavalo extends Animal{

    constructor(
        nome: string,
        idade: number,

    ){
        super(nome, idade);
        
    }
    verCavalo(){
        console.log(`\nAnimal Cavalo:
        \nMeu nome é ${this.nome}
        \nTenho ${this.idade} anos de idade`);
    }
    emitirBarulho(){
        console.log("Emito um som de Relincho");
    }
    correrAnimals1(){
    console.log("Corro igual um animal veloz");
    
    }
        
        
}