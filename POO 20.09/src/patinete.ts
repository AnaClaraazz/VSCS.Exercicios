export class Patinete{

marca: string;
cor: string;
limitedepeso: string;	
dimensoesdoitem: string;
nomedomodelo: string;

constructor(
    marca: string,
    cor: string,
    limitedepeso: string,
    dimensoesdoitem: string,
    nomedomodelo: string,
){
    this.marca = marca
    this.cor = cor
    this.limitedepeso = limitedepeso
    this.dimensoesdoitem = dimensoesdoitem
    this.nomedomodelo = nomedomodelo
}

verInfo(){
    console.log(`Sobre este item
    \nMarca: ${this.marca}
    \nCor: ${this.cor}
    \nLimite de peso: ${this.limitedepeso}
    \nDimensões do item: ${this.dimensoesdoitem}
    \nNome do modelo: ${this.nomedomodelo}`)
}

}
