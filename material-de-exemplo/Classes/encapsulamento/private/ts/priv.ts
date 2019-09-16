class Pessoa {
    private _cpf: string;
    constructor(cpf: string) {
        this._cpf = cpf; 
    }
}

class Policial extends Pessoa {
    constructor(cpf) {
        super(cpf); 
    }

    obtemCpf(){
        return this._cpf; // Não consegue acessar "_cpf" pois o mesmo é privado e apenas Pessoa pode acessa-la.
    }
}

let pessoa = new Pessoa("147.258.369-00");
console.log(pessoa._cpf); // Não consegue acessar "_cpf" pois o mesmo é privado.
