//abaixo, temos um exemplo da funcionalidade do método 'get set' ('get' significa pegar e 'set' significa dar)
// abaixo temos um objeto booleano A, que será usado como exemplo
class Exemplo
{
    private _A; boolean = false;
    get A(): boolean
    {
        return this._A;
    }
    // Como dito acima, o get é usado para pegar informações

    set A(value: boolean)
    {
        this._A = value;
    }
    // Ao contrário do método 'get', o 'set' dá informações, consecutivamente os métodos 'get' e 'set' trabalham em conjunto
}

