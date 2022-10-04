export class Eletronic{
    
    tipodeproduto: string
    fatordeforma: string
    largura: string
    profundidade: string
    altura: string
    peso: string
    cordocorpo: string


    constructor(
        tipodeproduto: string,
        fatordeforma:string,
        largura: string,
        profundidade:string,
        altura: string,
        peso: string,
        cordocorpo: string,
    
    ){
        this.tipodeproduto = tipodeproduto
        this.fatordeforma = fatordeforma
        this.largura = largura
        this.profundidade = profundidade
        this.altura = altura
        this.peso = peso
        this.cordocorpo = cordocorpo
       
    }

    verGeral(){
        console.log(`Informações Gerais do dispositivo
        \nTipo de produto: ${this.tipodeproduto}
        \nFator de forma: ${this.fatordeforma}
        \nLargura: ${this.largura}
        \nProfundidade: ${this.profundidade}
        \nAltura: ${this.altura}
        \nPeso: ${this.peso}
        \nCor do Corpo: ${this.cordocorpo}`);
    }

}