export class ContaBancaria{
    titular: string;
    agencia: string
    ;
    conta: string;
    saldo: string;

    constructor(
        titular: string,
        agencia: string,
        conta: string,
        saldo: string,
    ){
        this.titular = titular
        this.agencia = agencia
        this.conta = conta
        this.saldo = saldo
    }

    verConta(){
        console.log(`Dados de sua conta bancária
        \nTitular da conta: ${this.titular}
        \nAgência: ${this.agencia}
        \nConta: ${this.conta}
        \nSaldo: ${this.saldo}`);
    }

}