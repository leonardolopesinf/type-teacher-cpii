// Vamos começar criando uma classe que queremos que os atributos sejam passados para as outras , vamos chama lá de Pessoa
class Pessoa {
}
class Pessoafisica extends Pessoa // Criei a classe Pessoafisica , percebam onde está o comando extends (no meio das classes que eu quero pegar os atributos e dar os atributos , respectivamente)
 {
    constructor() {
        super(...arguments);
        this.nome = "3"; // Se tiramos as aspas temos um erro aqui pois a variavel nome está declarada como string na classe que fizemos a herança
    }
}
