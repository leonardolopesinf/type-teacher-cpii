# Guard Types

Os Guard Types são responsáveis por permitir a restrição do tipo de um determinado objeto dentro de uma estrutura condicional.

## Exemplo:


    type Cachorro = {
        corre: 'correndo!',
        latido: 'au au'
    }

    type Gato = {
        corre: 'correndo!',
        miado: 'miau!'
    }

    function getAnimal(): Cachorro | Gato
    {    
        //restante do código...
    }

    let animal1 = getAnimal();

    if ((animal1 as Cachorro).latido)
    {
        console.log((animal1 as Cachorro).latido);
    }

    else if ((animal1 as Gato).miado)
    {
        console.log((animal1 as Gato).miado);
    }


Em outras palavras, para verificarmos a presença de 'latido', precisamos necessariamente nos certificarmos de que _animal_ é um Cachorro; assim como para verificarmos a presença de 'miado', precisamos necessariamente nos certificarmos de que _animal_ é um Gato.
