/*Crie uma classe cliente e apresente os atributos e métodos referentes a esta classe, 
em seguida crie um objeto cliente, defina as instâncias deste objeto e apresente as informações 
deste objeto no console.*/

export class Cliente{
    nome: string;
    contato: string;
    email: string;

    constructor(
        nome: string,
        contato: string,
        email: string,
    ){
        this.nome = nome
        this.contato = contato
        this.email = email
    }

    verDados(){
        console.log(`Dados cadastrais do cliente 
        \nNome: ${this.nome} 
        \nContato: ${this.contato} 
        \nEmail: ${this.email}`);
    }

}