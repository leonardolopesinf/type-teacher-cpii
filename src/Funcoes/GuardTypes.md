# Guard Types

Os Guard Types são responsáveis por permitir a restrição do tipo de um determinado objeto dentro de uma estrutura condicional.

## Exemplo:


    interface Cachorro 
    {
        correr();
        latir();
    }

    interface Gato
    {
        correr();
        miar();
    }

    function getAnimal(): Cachorro | Gato
    {
        //restante do código...
    }

    let animal1 = getAnimal();

    if ((animal1 as Cachorro).latir)
    {
        (animal1 as Cachorro).latir();
    }
    else if ((animal1 as Gato).miar)
    {
        (animal1 as Gato).miar();
    }


Em outras palavras, para verificarmos a presença de 'latir', precisamos necessariamente nos certificarmos de que _animal_ é um Cachorro; assim como para verificarmos a presença de 'miar', precisamos necessariamente nos certificarmos de que _animal_ é um Gato.