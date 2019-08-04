# Classes Abstratas

Classes abstratas são o que podemos considerar como classes que servirão de base para outras classes, dando a elas uma estrutura padrão de métodos e atributos. Ou seja, outras classes serão derivadas da classe abstrata (através do conceito de herança). 

Uma classe abstrata é acionada através da palavra-chave _abstract_. Por exemplo:

    abstract class Animal
    {
        //restante do código...
    }

    class Cachorro extends Animal
    {
        //restante do código...
    }

No exemplo acima, _Animal_ é uma classe abstrata e _Cachorro_ é uma classe derivada da classe _Animal_ (denotado através da palavra-chave _extends_, ou seja, o conceito de herança será posto em prática).

Obs: Uma classe abstrata não pode ser instanciada.