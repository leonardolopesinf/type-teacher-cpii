//abaixo, criaremos uma classe abstrata, assim como uma classe derivada, para exemplificarmos o funcionamento
class Animal {
    constructor(nome) {
        this.nome = nome;
    }
}
class Cachorro extends Animal { //aqui, podemos usar o parâmetro 'nome', pois a classe Cachorro a recebeu por herança
    constructor(nome, raca) {
        super(nome);
        this.raca = raca;
    }
}
let Animal1 = new Cachorro("Arnaldo", "Bulldog");
let Animal2 = new Cachorro("Rex", "Chihuahua");
document.write('Animal1 -->' + JSON.stringify(Animal1) + '<br>');
document.write('Animal2 -->' + JSON.stringify(Animal2));
