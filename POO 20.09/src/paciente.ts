export class Paciente{
    nome: string;
    peso: string;
    idade: string;
    data: string;
    saida: string;

    constructor(
        nome: string,
        peso: string,
        idade: string,
        data: string,
        saida: string,
    ){
        this.nome = nome
        this.peso = peso
        this.idade = idade
        this.data = data
        this.saida = saida
    }
    verPacient(){
        console.log(`Ficha do Paciente
        \nNome do paciente: ${this.nome}
        \nPeso: ${this.peso}
        \nIdade: ${this.idade}
        \nData da entrada: ${this.data}
        \nData da saída: ${this.saida}`);
    }
}