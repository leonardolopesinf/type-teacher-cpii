# Tipando Retorno

Ao tiparmos o retorno de uma função, é o mesmo que dizer ao programa para que ele retorne apenas valores do tipo que pedimos (se nós tiparmos o retorno de uma função x como _number_, consequentemente o retorno daquela função será apenas de valores numéricos - _number_).

Para tiparmos um retorno, usamos uma 'seta gorda' (=>) entre os parâmetros e o tipo de retorno.

Por exemplo:

    function exemplo(x: number, y:number)
    {
        return x + y;
    }

    let exemplo1: (x: 7, y: 5) => number 
    

## Tipos _'Void'_ e _'Never'_:

Muitos usuários tendem a confunfir os tipos _void_ e _never_, já que eles são de certa forma similares. No entanto, é necessário retificar que _void_ e _never_ são bem diferentes. 

Ao usarmos _void_, o parâmetro (ou a função) retorna uma unidade vazia. Já usando _never_, o parâmetro **nunca** retorna algum valor. 

Por exemplo:

    function exemplo(x: number, y:number)
    {
        return x + y;
    }

    let exemplo1: void  //exemplo1 retorna uma unidade vazia, porém retorna.
    let exemplo2: never //nesse caso, o valor nunca retorna.

