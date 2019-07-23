class Pessoa //uma classe é declarada com a palavra-chave 'class' seguida do nome escolhido para a classe
{
    constructor (nome, idade)
    {
        this.nome = nome;
        this.idade = idade;
    }

    ola()
    {
        return  "Nome: " + this.nome + " de " + this.idade;
    }

}

let Nome1 = new Pessoa("Alberto", "15") //criamos o objeto Nome1, atribuindo os valores "Alberto" para nome e "15" para idade

document.write(JSON.stringify(Nome1));