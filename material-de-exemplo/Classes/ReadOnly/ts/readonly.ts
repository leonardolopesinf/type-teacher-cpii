class Pessoa {
    readonly _cpf: string;
    constructor (cpf: string) {
        this._cpf = cpf;
    }
}
let rodrigo = new Pessoa("147.258.369-00");
console.log(rodrigo._cpf);
rodrigo._cpf = "Man with the 3-piece suit"; // Erro. "_cpf" é um readonly, logo, não é possível alterar seu valor.