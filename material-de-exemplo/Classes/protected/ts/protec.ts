class Pessoa {
    protected _nome:string;

    constructor(nome: string) {
        this._nome = nome;
    }
}

class Funcionario extends Pessoa {
    private _departamento: string;

    constructor(nome: string, departamento: string) {
        super(nome);
        this._departamento = departamento;
    }

    public cumprimento() {
        return `Olá, meu nome é ${this._nome} e eu trabalho no ${this._departamento}.`;
    }
}

let bob = new Funcionario("Bob", "Vendas");
console.log(bob.cumprimento());
console.log(bob._nome); // Erro


//Embora não possamos usar o nome de fora da pessoa, ainda podemos usá-lo de dentro de um método de instância do funcionário porque o funcionário deriva da pessoa