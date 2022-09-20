export class Funcionario{
    nome: string;
    contato: string;
    email: string;
    cargo: string;
    temponafuncao: string;
    carteiraassinada: string;

    constructor(
        nome: string,
        contato: string,
        email: string,
        cargo: string,
        temponafuncao: string,
        carteiraassinada: string,
    ){
        this.nome = nome
        this.contato = contato
        this.email = email
        this.cargo = cargo
        this.temponafuncao = temponafuncao
        this.carteiraassinada = carteiraassinada

    }

    verColaborador(){
        console.log(`Perfil do Funcionário do mês
        \nNome: ${this.nome}
        \nContato: ${this.contato}
        \nEmail: ${this.email}
        \nFunção: ${this.cargo}
        \nTempo na função: ${this.temponafuncao}
        \nCarteira assinada: ${this.carteiraassinada}`);
    }
}