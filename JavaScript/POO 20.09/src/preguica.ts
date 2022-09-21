import { Animal } from "./animal";

export class Preguica extends Animal{


    constructor(
        nome: string,
        idade: number,

    ){
        super(nome, idade);
    }
    verPreguica(){
        console.log(` Animal preguiça:
        \nMeu nome é ${this.nome}
        \nTenho ${this.idade} anos de idade`);
    }
    subirArvore(){
        console.log("TO SUBINDO A ARVORE");
    }
    emitirBarulho1(){
        console.log("Emito um som de alta-frequência pelas narinas");
    }
    correrAnimals(){
        console.log("Corro igual um animal lento");

    }
    
    
}