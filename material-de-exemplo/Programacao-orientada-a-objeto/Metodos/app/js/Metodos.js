//abaixo, temos um exemplo da funcionalidade do método 'get set' ('get' significa pegar e 'set' significa dar)
// abaixo temos um objeto booleano A, que será usado como exemplo
class Exemplo {
    constructor() {
        this._A = false;
        // Ao contrário do método 'get', o 'set' dá informações, consecutivamente os métodos 'get' e 'set' trabalham em conjunto
    }
    get A() {
        return this._A;
    }
    // Como dito acima, o get é usado para pegar informações
    set A(value) {
        this._A = value;
    }
}
let exemplo = new Exemplo();
document.write('Valor antigo: ' + JSON.stringify(exemplo.A) + '<br>');
exemplo.A = true;
document.write('Novo valor: ' + JSON.stringify(exemplo.A));
