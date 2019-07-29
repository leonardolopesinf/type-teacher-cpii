# Constructor

Um constructor é um tipo especial de métodos de uma classe, que também é automaticamente acionado assim que uma instância de classe é criada.

Um constructor é criado explicitamente através da palavra-chave _constructor_. Por exemplo:

    abstract class Exemplo
    {
        parametro1: string;
        parametro2: string;
        
        constructor(parametro1; string, parametro2: string)
        {
            this.parametro1 = parametro1;
            this.parametro2 = parametro2;
        }

        //restante do código...
    }

No exemplo acima, criamos uma constructor com dois parâmetros (_parametro1_ e _parametro2_, ambos definidos como string), que foram declaradas dentro da classe _Exemplo_.