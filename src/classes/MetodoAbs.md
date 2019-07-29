# Métodos Abstratos

Métodos abstratos são métodos que serão passados para classes derivadas por meio de herança. Métodos abstratos não possuem implementação e devem ser implementados em classes derivadas.

Para declarar métodos abstratos, basta usarmos a palavra-chave _abstract_ (assim como na declaração de classes abstratas).

    abstract class Animal
    {
        abstract EmitirSom(): void;

        //restante do código...
    }

    class Cachorro extends Animal
    {
        EmitirSom(): void
        {
            console.log("Latindo...");
        }
    }

No exemplo acima, criamos um método abstrato chamado _EmitirSom_, que foi criado dentro da classe abstrata _Animal_. Criamos também uma classe derivada chamada _Cachorro_, onde implementamos o método abstrato _EmitirSom_.