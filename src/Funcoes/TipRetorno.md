# Tipando Retorno

Ao tiparmos o retorno de uma função, é o mesmo que dizer ao programa para que ele retorne apenas valores do tipo que pedimos (se nós tiparmos o retorno de uma função x como _number_, consequentemente o retorno daquela função será apenas de valores numéricos - _number_).

Para tiparmos um retorno, usamos dois pontos (:) entre os parâmetros e o tipo de retorno.

Por exemplo:

    function exemplo(x: number, y:number) : number
    {
        return x + y;
    }

    console.log(exemplo(7, 5)) // 12
    

## Tipos _'Void'_ e _'Never'_:

Muitos usuários tendem a confunfir os tipos _void_ e _never_, já que eles são de certa forma similares. No entanto, é necessário retificar que _void_ e _never_ são bem diferentes. 

Ao usarmos _void_, o parâmetro (ou a função) retorna uma unidade vazia. Já usando _never_, o parâmetro **nunca** retorna algum valor. 

Por exemplo:

    function exemplo1(x: number, y:number): void
    {
        console.log(x + y)
        return;
    }

    function exemplo2(x: number, y:number): never
    {
        console.log(x + y)
        throw new Error('Esta função não pode retornar valor algum!');
    }

    exemplo1(1, 10)  //exemplo1 retorna uma unidade vazia, porém retorna.
    exemplo2(2, 20) //nesse caso, o valor nunca retorna.

