/*Crie uma classe avião e apresente os atributos e métodos referentes a 
esta classe, em seguida crie um objeto avião, defina as instâncias deste objeto e 
apresente as informações deste objeto no console.*/

export class Avião{
    numeromotores: string;
    tipomotor: string;
    modelo: string;
    potenciamotor: string;
    propulsorhelice: string;

    constructor(
        numeromotores: string,
        tipomotor: string,
        modelo: string,
        potenciamotor: string,
        propulsorhelice: string,
    
    ){
        this.numeromotores = numeromotores
        this.tipomotor = tipomotor
        this.modelo = modelo
        this.potenciamotor = potenciamotor
        this.propulsorhelice = propulsorhelice
    
    }

    verExpecificacoes(){
        console.log(`Motorização do Avião
        \nNúmero de motores: ${this.numeromotores}
        \nTipo do motor: ${this.tipomotor}
        \nFabricante/modelo: ${this.modelo}
        \nPotência por motor: ${this.potenciamotor}
        \nDescrição do propulsor/hélice: ${this.propulsorhelice}`);
    }
}
