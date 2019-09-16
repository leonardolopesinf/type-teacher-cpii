//abaixo, criaremos uma classe abstrata, assim como uma classe derivada, para exemplificarmos o funcionamento

abstract class Animal
{
    public nome: string;

    constructor(nome:string) 
    {
        this.nome = nome;
    }
}

class Cachorro extends Animal
{
    public raca: string;

    constructor(nome: string, raca: string) //aqui, podemos usar o parâmetro 'nome', pois a classe Cachorro a recebeu por herança
    {
        super(nome); // com o "super" iremos resgatar o constructor da classe "Animal" passando os parametros do cosntructor dentro dos parênteses
        this.raca = raca;
    }
}

let Animal1: Animal = new Cachorro("Arnaldo", "Bulldog");

let Animal2: Animal = new Cachorro("Rex", "Chihuahua");

document.write('Animal1 -->' + JSON.stringify(Animal1) + '<br>');
document.write('Animal2 -->' + JSON.stringify(Animal2));